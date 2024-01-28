import streamlit as st
from streamlit_extras.switch_page_button import switch_page


if __name__ == "__main__":
    with st.empty().form(key='columns_in_form'):
        c1, c2 = st.columns(2, gap="medium")
        with c1:
            st.title('Landlord info')
            lf_name = st.text_input('Landlord First name', value=None, placeholder="John")
            ll_name = st.text_input('Landlord Last name', value=None, placeholder="Doe")
            l_street = st.text_input("Street address", value=None, placeholder="Type your address")
            l_unit = st.text_input("Unit", value=None, placeholder="Type your unit")
            l_municipality = st.text_input("Municipality", value=None, placeholder="Type your municipality")
            l_post_code = st.text_input("Postal code", value=None, placeholder="Type your postal code")
            le_email = st.text_input('Landlord Email', value=None, placeholder="eg. username@gmail.com")
        with c2:
            st.title('Tenant info')
            tf_name = st.text_input('Tenant First name', value=None, placeholder="John")
            tl_name = st.text_input('Tenant Last name', value=None, placeholder="Doe")
            td_number = st.text_input("Tenant phone number", value=None, placeholder="Type your phone number...")
            te_mail = st.text_input('Tenant Email', value=None, placeholder="eg. username@gmail.com")
            st.title('Signature')
            signature = st.text_input("Tenant Signature", value=None, placeholder="Type your FULL NAME")
            submit = st.form_submit_button(f'Submit! 🔨')
            if submit:
                st.write('Submitted')
                switch_page("Chat")
