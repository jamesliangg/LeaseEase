import requests
from langchain.pydantic_v1 import BaseModel, Field
from langchain.tools import BaseTool, StructuredTool, tool

import dotenv
dotenv.load_dotenv()
PDF_CO_API_KEY = os.environ["PDF_CO_API_KEY"]

@tool
def PDFAutomataReasons(reason1: bool, reason2: bool, reason3: bool,
                       reason4: bool, reason5: bool, reason6: bool,
                       reason7: bool, reason8: bool, explanations: str) -> str:
  """
  Fills the T1 form for the user.
  Background Information: Information about the landlord and the tenant.
  Reason 1: Landlord charged illegal rent.
  Reason 2: Paid illegal charge to landlord/agent/superintendent.
  Reason 3: Landlord misused last month's rent deposit.
  Reason 4: Landlord denied access to rental unit despite agreement.
  Reason 5: Landlord owes interest on last month's rent deposit.
  Reason 6: Landlord ended tenancy without compensation.
  Reason 7: Landlord sold personal property without paying proceeds.
  Reason 8: Landlord failed to notify about Order Prohibiting Rent Increase.
  """

  outputFileName = "filled_T1_Form.pdf"

  BASE_URL = "https://api.pdf.co/v1"

  uploadedFileUrl = "https://tribunalsontario.ca/documents/ltb/Tenant%20Applications%20&%20Instructions/T1.pdf"

  reasonList = ""
  if reason1:
    reasonList += "1; "
  if reason2:
    reasonList += "2; "
  if reason3:
    reasonList += "3; "
  if reason4:
    reasonList += "4; "
  if reason5:
    reasonList += "5; "
  if reason6:
    reasonList += "6; "
  if reason7:
    reasonList += "7; "
  if reason8:
    reasonList += "8; "


  fieldsStrings = f"3;form1[0].#subform[8].Reason1[0];{reason1}|3;form1[0].#subform[8].Reason2[0];{reason2}|4;form1[0].#subform[11].Reason3[0];{reason3}|4;form1[0].#subform[11].Reason4[0];{reason4}|4;form1[0].#subform[11].Reason5[0];{reason5}|4;form1[0].#subform[11].Reason6[0];{reason6}|4;form1[0].#subform[11].Reason7[0];{reason7}|4;form1[0].#subform[11].Reason8[0];{reason8}|5;form1[0].#subform[12].ReasonTable[0].Row1[0].ReasonField[0];{reasonList}|5;form1[0].#subform[12].ReasonTable[0].Row1[0].ReasonDetail[0];{explanations}"

  destFile = f"..\\{outputFileName}"

  parameters = {}
  parameters["name"] = destFile
  parameters["url"] = uploadedFileUrl
  parameters["fieldsString"] = fieldsStrings
  parameters["async"] = False

  url = "{}/pdf/edit/add".format(BASE_URL)

  # Execute request and get response as JSON
  response = requests.post(url,
                           data=parameters,
                           headers={"x-api-key": PDF_CO_API_KEY})
  if (response.status_code == 200):
    json = response.json()

    if json["error"] == False:
      #  Get URL of result file
      resultFileUrl = json["url"]
      # Download result file
      r = requests.get(resultFileUrl, stream=True)
      if (r.status_code == 200):
        with open(destFile, 'wb') as file:
          for chunk in r:
            file.write(chunk)
        print(f"Result file saved as \"{destFile}\" file.")
      else:
        print(f"Request error: {response.status_code} {response.reason}")
    else:
      # Show service reported error
      print(json["message"])
  else:
    print(f"Request error: {response.status_code} {response.reason}")

  return outputFileName
