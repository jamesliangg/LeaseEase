import base64
import random
import time
from langchain.schema import ChatMessage
from langchain_community.chat_message_histories import StreamlitChatMessageHistory
from streamlit_extras.switch_page_button import switch_page
from langchain_community.callbacks import StreamlitCallbackHandler
from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.runnables import RunnableConfig

import sys
import os
sys.path.insert(1, os.getcwd())
from chatbot import chatbot
import streamlit as st

def side_out():
    with st.sidebar:
        st.title("PDF Output")
        st.markdown(
            """
            <style>
                .sidebar .sidebar-content {
                    width: 503px;
                }
            </style>
            """,
            unsafe_allow_html=True
        )
        displayPDF("./N4.pdf")

def displayPDF(file):
    # Opening file from file path
    with open(file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')
    # Embedding PDF in HTML
    pdf_display = F'<iframe src="data:application/pdf;base64,{base64_pdf}" width="500" height="500" type="application/pdf"></iframe>'
    # Displaying File
    st.markdown(pdf_display, unsafe_allow_html=True)

def chat():
    st.title("Chat")

    st.session_state.bot = chatbot()
    output_container = st.empty()

    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state["messages"] = [ChatMessage(role="assistant", content="How can I help you?")]

    for msg in st.session_state.messages:
        st.chat_message(msg.role).write(msg.content)

    # Accept user input
    if prompt := st.chat_input("How may I help?"):
        # Add user message to chat history
        st.chat_message("user").write(prompt)
        # Display user message in chat message container
        st.session_state.messages.append(ChatMessage(role="user", content=prompt))

        output_container.chat_message("user").write(prompt)
        # Display assistant response in chat message container

        output_container = output_container.container()

        answer_container = output_container.chat_message("assistant")
        st_callback = StreamlitCallbackHandler(answer_container)
        cfg = RunnableConfig()
        cfg["callbacks"] = [st_callback]

        answer = st.session_state.bot.query(
            prompt,
            cfg,
        )
        answer_container.write(answer["output"])

        with st.chat_message("assistant"):
            st.markdown(answer["output"])

        st.session_state.messages.append(ChatMessage(role="assistant", content=answer["output"]))

        # Add assistant response to chat history
        side_out()

if __name__ == "__main__":
    chat()
