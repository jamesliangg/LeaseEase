import base64
import random
import time

import streamlit as st


def side_out():
    with st.sidebar:
        st.title("PDF Output")
        displayPDF("N4.pdf")


def displayPDF(file):
    # Opening file from file path
    with open(file, "rb") as f:
        base64_pdf = base64.b64encode(f.read()).decode('utf-8')
    # Embedding PDF in HTML
    pdf_display = F'<iframe src="data:application/pdf;base64,{base64_pdf}" width="500" height="500" type="application/pdf"></iframe>'
    # Displaying File
    st.markdown(pdf_display, unsafe_allow_html=True)


# def displayPDF(file):
#     # Opening file from file path
#     with open(file, "rb") as f:
#         base64_pdf = base64.b64encode(f.read()).decode('utf-8')
#
#     # Embedding PDF in HTML
#     pdf_display =  f"""<embed
#     class="pdfobject"
#     type="application/pdf"
#     title="Embedded PDF"
#     src="data:application/pdf;base64,{base64_pdf}"
#     style="overflow: auto; width: 100%; height: 100%;">"""
#
#     # Displaying File
#     st.markdown(pdf_display, unsafe_allow_html=True)

def chat():
    st.title("Simple chat")

    # Initialize chat history
    if "messages" not in st.session_state:
        st.session_state.messages = []

    # Display chat messages from history on app rerun
    for message in st.session_state.messages:
        with st.chat_message(message["role"]):
            st.markdown(message["content"])

    # Accept user input
    if prompt := st.chat_input("What is up?"):
        # Add user message to chat history
        st.session_state.messages.append({"role": "user", "content": prompt})
        # Display user message in chat message container
        with st.chat_message("user"):
            st.markdown(prompt)

        # Display assistant response in chat message container
        with st.chat_message("assistant"):
            message_placeholder = st.empty()
            full_response = ""
            assistant_response = random.choice(
                [
                    "Hello there! How can I assist you today?",
                    "Hi, human! Is there anything I can help you with?",
                    "Do you need help?",
                ]
            )
            # Simulate stream of response with milliseconds delay
            for chunk in assistant_response.split():
                full_response += chunk + " "
                time.sleep(0.05)
                # Add a blinking cursor to simulate typing
                message_placeholder.markdown(full_response + "▌")
            message_placeholder.markdown(full_response)
        # Add assistant response to chat history
        st.session_state.messages.append({"role": "assistant", "content": full_response})
        side_out()


if __name__ == "__main__":
    with st.form(key='columns_in_form'):
        c1, c2 = st.columns(2)
        with c1:
            st.title('Landlord info')
            lf_name = st.text_input('Landlord First name', value=None, placeholder="Jwhn")
            ll_name = st.text_input('Landlord Last name', value=None, placeholder="Suwuft")
            l_street = st.text_input("Street address", value=None, placeholder="Type your address")
            l_unit = st.text_input("Unit", value=None, placeholder="Type your unit")
            l_municipality = st.text_input("Municipality", value=None, placeholder="Type your municipality")
            l_post_code = st.text_input("Postal code", value=None, placeholder="Type your postal code")
            le_email = st.text_input('Landlord Email', value=None, placeholder="hmy@uwo.he")
        with c2:
            st.title('Tenant info')
            tf_name = st.text_input('Tenant First name', value=None, placeholder="Jwhn")
            tl_name = st.text_input('Tenant Last name', value=None, placeholder="Suwuft")
            td_number = st.text_input("Tenant Day phone number", value=None, placeholder="Type a number...")
            te_mail = st.text_input('Tenant Email', value=None, placeholder="uwu@owo.eh")
            st.title('Signature')
            signature = st.text_input("Tenant Signature", value=None, placeholder="Type your FULL NAME")
            submit = st.form_submit_button(f'Submit!🐬')
            if submit:
                st.write('Submited')