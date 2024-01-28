import requests
from langchain.pydantic_v1 import BaseModel, Field
from langchain.tools import BaseTool, StructuredTool, tool
from langchain_community.chat_models import ChatCohere
from langchain_community.embeddings import CohereEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.retrievers.document_compressors import CohereRerank
from langchain.retrievers import ContextualCompressionRetriever
from langchain_community.retrievers import CohereRagRetriever
from langchain_core.messages import HumanMessage

import pickle
import os

import dotenv
dotenv.load_dotenv()
PDF_CO_API_KEY = os.environ["PDF_CO_API_KEY"]

# use Cohere langchain API to create more professional explanations
def explain_reasons(reasons: str) -> str:
  """
  This function uses Cohere's langchain API to create more professional explanations for the reasons the user has selected.
  reasons: The reasons the user has selected.
  """

  chat = ChatCohere(model="command", max_tokens=20, temperature=0)
  messages = [HumanMessage(content="Answer the question/demand directly. Explain the following reasons in more professional terms for a tenant or landlord filing a complaint. Below are the reasons: " + reasons + ".")]
  output = chat.invoke(messages)
  return output

print(explain_reasons("My landlord charged me an illegal rent, which I have paid. Can you file a T1 form for me?"))