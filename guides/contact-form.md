 ## How To Setup: Contact Form


1. Go to Google Forms & Sign In

2. Create a new form 

![image](https://user-images.githubusercontent.com/86180097/174424881-808ae090-ad35-47ee-b2d3-03a310842288.png)

3. Follow this exact template

![image](https://user-images.githubusercontent.com/86180097/174426878-5d6feebc-0c93-43b7-a967-068d31996c29.png)

4. Press the dropdown menu to the right of the "Send" button & press "Get Pre-Filled Link"

![image](https://user-images.githubusercontent.com/86180097/174424976-4ad07d02-d8de-4efc-b315-368d0f554b2d.png)

5. Enter all forms with random data & press "Get Link", a popup will appear then press "Copy Link".

![image](https://user-images.githubusercontent.com/86180097/174425028-f3d0aafa-de2c-4951-9fa7-147e92fa5d1c.png)

6. Save / copy these values from your link for later

<b> Google Link</b>

Your google link will look something like this, save & copy it for later. 

      https://docs.google.com/forms/d/e/1FAIpQLSfy-tWg12-h-gbtJbk5g5GTPUpNZg2iML1fPgcAkNgJfqgzMQ/viewform?usp=pp_url&entry.1416717319=a&entry.2145923340=a&entry.355339717=a
       


<b>Form ID</b>:


      
the part that says "YOUR GOOGLE ID" will be your Google Form ID.  

      https://docs.google.com/forms/d/e/YOUR GOOGLE ID/viewform?usp=pp_url&entry.1416717319=a&entry.2145923340=a&entry.355339717=a
       
     
<b>Entry ID(s)</b>:

The 3 "entry" value(s) after your form id, like so -

       entry.1416717319, entry.2145923340, entry.355339717


Save these for later. 


7. Go back to your Google Form, press on "Responses" & "Create spreadsheet"

![image](https://user-images.githubusercontent.com/86180097/174425184-aff8d5ad-ec6d-4496-8194-715a3570177f.png)



8. Under line 44 in the file <code>index.html</code>
 
Put your Google Entry ID's & Google Form Link you collected from earlier to the corresponding variables. 

The first entry ID is "Name", second entry ID is "Email" & third is "Textarea"


         var Google_Entry_ID_Name="entry.1416717319";
  
         var Google_Entry_ID_Email="entry.2145923340";  
    
         var Google_Entry_ID_TextArea="entry.355339717";     
         
          // Put your Google Form Link Here  (Make sure to use correct link as documented)
         var Google_Form_Link="https://docs.google.com/forms/d/e/1FAIpQLSfy-tWg12-h-gbtJbk5g5GTPUpNZg2iML1fPgcAkNgJfqgzMQ/formResponse?"  
    


9. Deploy to your hosting provider! Github Pages etc. 

Enjoy! :) All responses will be collected in your spreadsheet! 
 
 
  
  
