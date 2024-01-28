from langchain_community.llms import Cohere
from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CohereRerank
from langchain_community.embeddings import CohereEmbeddings
from langchain_community.chat_models import ChatCohere
from langchain.text_splitter import CharacterTextSplitter
from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import Chroma
from langchain import hub
from langchain.agents import AgentExecutor, create_openai_functions_agent
from langchain_community.llms import Cohere
from langchain_openai import OpenAI
from langchain_openai import ChatOpenAI
from langchain.pydantic_v1 import BaseModel, Field
from langchain.tools import BaseTool, StructuredTool, tool

import os

from automata import *
import pprint

import dotenv
dotenv.load_dotenv()
PDF_CO_API_KEY = os.environ["PDF_CO_API_KEY"]
COHERE_API_KEY = os.environ["COHERE_API_KEY"]
OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]

class chatbot:
    def __init__(self):
        return
    
    def query(self, message, chat_history, message_placeholder) -> str:
        tools = [PDFAutomataReasonsTenant, PDFAutomataReasonsOwner, cohere_rag]
        
        full_response = ""
        
        # Get the prompt to use - you can modify this!
        prompt = hub.pull("hwchase17/openai-functions-agent")

        # Choose the LLM that will drive the agent
        llm = ChatOpenAI(model="gpt-3.5-turbo-1106")

        agent = create_openai_functions_agent(llm, tools, prompt)

        # Create an agent executor by passing in the agent and tools
        agent_executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
        
        for chunk in agent_executor.stream  (
            {"input": message}
            ):
            pprint.pprint(chunk)
            # User Input
            if "input" in chunk:
                message_placeholder.markdown(f"User Input: `{chunk['input']}`")
            # Agent Action
            elif "actions" in chunk:
                for action in chunk["actions"]:
                    message_placeholder.markdown(f"Calling Tool: `{action.tool}` with input `{action.tool_input}`")
            # Observation
            elif "steps" in chunk:
                for step in chunk["steps"]:
                    message_placeholder.markdown(f"Tool Result: `{step.observation}`")
            # Final result
            elif "output" in chunk:
                message_placeholder.markdown(f'Final Output: {chunk["output"]}')
            else:
                raise ValueError()
            message_placeholder.markdown("---")


        return full_response
        