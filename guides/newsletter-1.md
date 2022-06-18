 ## How To Setup: Newsletter


1. Go to Google Forms & Sign In

2. Create a new form 

![image](https://user-images.githubusercontent.com/86180097/174424881-808ae090-ad35-47ee-b2d3-03a310842288.png)

3. Follow this exact template

![image](https://user-images.githubusercontent.com/86180097/174426258-ca52bdc0-a724-4e9c-9aee-7a6af42d2087.png)

4. Press the dropdown menu to the right of the "Send" button & press "Get Pre-Filled Link"

![image](https://user-images.githubusercontent.com/86180097/174424976-4ad07d02-d8de-4efc-b315-368d0f554b2d.png)

5. Enter all forms with random data & press "Get Link", a popup will appear then press "Copy Link".

![image](https://user-images.githubusercontent.com/86180097/174425028-f3d0aafa-de2c-4951-9fa7-147e92fa5d1c.png)

6. Save / copy these values from your link for later

<b> Google Link</b>

Your google link will look something like this, save & copy it for later. 

      https://docs.google.com/forms/d/e/1FAIpQLSeqIlTE59GOB_yxtowZdVbzoXvMEO_YRTmQ9YKIsLy32A7S-w/viewform?usp=pp_url&entry.2031583407=hello
       
       
     
<b>Entry ID</b>:

The "entry" value(s) after your form id, like so -

       entry.2031583407


Save these for later. 


7. Go back to your Google Form, press on "Responses" & "Create spreadsheet"

![image](https://user-images.githubusercontent.com/86180097/174425184-aff8d5ad-ec6d-4496-8194-715a3570177f.png)


8. Once the spreadsheet has been created, make it PUBLIC & save the tab name at the bottom left corner

![image](https://user-images.githubusercontent.com/86180097/174425225-79e9a095-d241-4dba-91d4-cee0997f1940.png)
          
9. Under line 40 in the file <code>index.html</code>
 
Put your Google Entry ID  & Google Form Link you collected from earlier to the corresponding variables. 

 
      // Put your Google Entry Form ID Here
      var Google_Entry_ID="entry.2031583407";
    
      // Put your Google Form Link Here  (Make sure to use correct link as documented)
      var Google_Form_Link="https://docs.google.com/forms/d/e/1FAIpQLSeqIlTE59GOB_yxtowZdVbzoXvMEO_YRTmQ9YKIsLy32A7S-w/formResponse?"  
  
  


10. Deploy to your hosting provider! Github Pages etc. 

Enjoy! :) 
 
 
  
  
