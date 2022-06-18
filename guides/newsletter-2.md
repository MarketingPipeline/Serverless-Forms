## How To Setup: Newsletter


1. Go to Google Forms & Sign In

2. Create a new form 

![image](https://user-images.githubusercontent.com/86180097/174424881-808ae090-ad35-47ee-b2d3-03a310842288.png)

3. Follow this exact template (you can choose whatever name for the form)

![image](https://user-images.githubusercontent.com/86180097/174426563-c821d933-7992-4c85-9409-178359f99d14.png)

4. Press the dropdown menu to the right of the "Send" button & press "Get Pre-Filled Link"

![image](https://user-images.githubusercontent.com/86180097/174424976-4ad07d02-d8de-4efc-b315-368d0f554b2d.png)

5. Enter all forms with random data & press "Get Link", a popup will appear then press "Copy Link".

![image](https://user-images.githubusercontent.com/86180097/174425028-f3d0aafa-de2c-4951-9fa7-147e92fa5d1c.png)

6. Save / copy these values from your link for later

<b> Google Link</b>

Your google link will look something like this, save & copy it for later. 

      https://docs.google.com/forms/d/e/1FAIpQLSfdIbWTo8S9oS1cVD1EKnJ0DUBupWHb1nma0FdBvtnPuZauqw/viewform?usp=pp_url&entry.1321823232=a&entry.1709481087=a
       
       
     
<b>Entry ID(s)</b>:

The "entry" value(s) after your form id, like so -

      entry.1321823232, entry.1709481087


Save these for later. 


7. Go back to your Google Form, press on "Responses" & "Create spreadsheet"

![image](https://user-images.githubusercontent.com/86180097/174425184-aff8d5ad-ec6d-4496-8194-715a3570177f.png)


8. Once the spreadsheet has been created, make it PUBLIC & save the tab name at the bottom left corner

![image](https://user-images.githubusercontent.com/86180097/174425225-79e9a095-d241-4dba-91d4-cee0997f1940.png)
          
9. Under line 34 in the file <code>index.html</code>
 
Put your Google Entry ID(s)  & Google Form Link you collected from earlier to the corresponding variables. 

1st entry ID is "Name", 2nd entry ID is "Email"

 
        
        // Put your Google Entry Form ID Here
        var Google_Entry_ID_Name="entry.39168894";
  
        var Google_Entry_ID_Email="entry.39168894";  
    
    
      // Put your Google Form Link Here  (Make sure to use correct link as documented)
      var Google_Form_Link="https://docs.google.com/forms/d/e/1FAIpQLSfdIbWTo8S9oS1cVD1EKnJ0DUBupWHb1nma0FdBvtnPuZauqw/formResponse?"  
  
  


10. Deploy to your hosting provider! Github Pages etc. 

Enjoy! :) All responses will be collected in your spreadsheet! 
 
 
  
