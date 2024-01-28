# McHacks

Inspiration
The genesis of LeaseEase lies in the escalating housing crisis in Canada, where landlords have increasingly exploited students and other vulnerable groups. Recognizing the urgent need for accessible legal resources, we envisioned LeaseEase as a beacon of support and empowerment. Our goal was to create a tool that simplifies the complexities of tenant rights under the Canadian Residential Tenancy Act, making legal protection accessible to those who need it most.

What It Does
LeaseEase is a groundbreaking application that combines a Large Language Model (LLM) with Retrieval-Augmented Generation (RAG) to interpret and apply the Canadian Residential Tenancy Act. It transforms user queries into actionable advice and automatically generates crucial legal documents, such as T1 and N7 forms. This functionality ensures that underprivileged groups are not only informed but also equipped to assert their rights effectively.

How We Built It
Our journey in building LeaseEase was a blend of innovative technologies and user-centric design. We utilized Streamlit for an intuitive front-end experience, integrating OpenAI and Cohere for the NLP and LLM functionalities. The backbone of our data operations was ChromaDB, a vector database, and we leveraged LangChain to seamlessly connect all these components.

Challenges We Ran Into
Developing LeaseEase was not without its hurdles. Integrating the backend with the frontend to accurately display the agent's thought process and RAG citations was a significant challenge. Additionally, creating the vector database and formatting the Residential Tenancy Act document appropriately required considerable effort and ingenuity.

Accomplishments That We're Proud Of
We take immense pride in LeaseEase's combination of aesthetic design and sophisticated technology. The implementation of the function calling feature and the streaming capability are particular highlights, demonstrating the effective use of RAG and LangChain agents. These features not only enhance the user experience but also validate our technological choices.

What We Learned
This project was a profound learning experience. Beyond mastering technical tools like Streamlit, LangChain, and various aspects of LLM technologies, we gained insights into the social implications of technology. We understood how the inaccessibility of legal resources can disadvantage vulnerable populations, reinforcing our commitment to tech for social good.

What's Next for LeaseEase
Looking forward, we aim to expand the range of forms LeaseEase can produce and enhance the reasoning capabilities of the LLM. We are excited about potential collaborations with government bodies or tribunals, which could include direct submission features for the forms generated. The future of LeaseEase is not just about technological advancement, but also about deepening our impact on social justice and community empowerment.
