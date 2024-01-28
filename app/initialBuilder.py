import os
import requests
import dotenv
dotenv.load_dotenv()
PDF_CO_API_KEY = os.environ["PDF_CO_API_KEY"]

def T1_Form(lf_name: str, ll_name: str, l_street: str, l_unit: str,
            l_municipality: str, l_post_code: str, le_email: str, tf_name: str,
            tl_name: str, t_street: str, td_number: str, t_municipality: str,
            t_post_code: str, te_mail: str) -> None:
  outputFileName = "initial_T1_Form.pdf"

  BASE_URL = "https://api.pdf.co/v1"

  uploadedFileUrl = "https://tribunalsontario.ca/documents/ltb/Tenant%20Applications%20&%20Instructions/T1.pdf"

  fieldsStrings = f"1;form1[0].#subform[1].Rental_Address_for_Landlord_form[0].StreetName[0]{l_street}|1;form1[0].#subform[1].Rental_Address_for_Landlord_form[0].Municipality[0]{l_municipality}|1;form1[0].#subform[1].Rental_Address_for_Landlord_form[0].PostalCode[0]{l_post_code}|1;form1[0].#subform[1].LTHAS_Tenant_Name__Address[0].TFirstName1[0]{tf_name}|1;form1[0].#subform[1].LTHAS_Tenant_Name__Address[0].TLastName1[0]{tl_name}|1;form1[0].#subform[1].LTHAS_Tenant_Name__Address[0].TDayPhone[0]{td_number}|1;form1[0].#subform[1].LTHAS_Tenant_Name__Address[0].Temail[0]{te_mail}|2;form1[0].#subform[5].LTHAS_Landlord_Name__Address[0].LFirstName[0]{lf_name}|2;form1[0].#subform[5].LTHAS_Landlord_Name__Address[0].LLastName[0]{ll_name}|2;form1[0].#subform[5].LTHAS_Landlord_Name__Address[0].LAddress[0]{l_street}|2;form1[0].#subform[5].LTHAS_Landlord_Name__Address[0].LPostalCode[0]{l_post_code}|2;form1[0].#subform[5].LTHAS_Landlord_Name__Address[0].LMunicipality[0]{l_municipality}|2;form1[0].#subform[5].LTHAS_Landlord_Name__Address[0].Lemail[0];{le_email}"

  destFile = f"./forms/{outputFileName}"

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



def N7_Form(lf_name: str, ll_name: str, l_street: str, l_unit: str,
            l_municipality: str, l_post_code: str, le_email: str, tf_name: str,
            tl_name: str, t_street: str, td_number: str, t_municipality: str,
            t_post_code: str, te_mail: str) -> None:
  outputFileName = "initial_N7_Form.pdf"

  BASE_URL = "https://api.pdf.co/v1"

  uploadedFileUrl = "https://tribunalsontario.ca/documents/ltb/Notices%20of%20Termination%20&%20Instructions/N7.pdf"
  t_name = tf_name + " " + tl_name
  l_name = lf_name + " " + ll_name
  fieldsStrings = f"0;form1[0].#subform[0].Notice_Name_and_Address[0].TO_TenameName[0]{t_name}|0;form1[0].#subform[0].Notice_Name_and_Address[0].From_LandlordName[0];{l_name}|0;form1[0].#subform[0].Notice_Name_and_Address[0].RentalUnitAddress[0];{t_street}|1;form1[0].#subform[4].Signature_for_Notice[0].Signature[0];{l_name}"

  destFile = f"./forms/{outputFileName}"

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
