# create a registration form using react js and typescript
***
## Home page related information
1. create a home page it should contain register button for registration
2. on clicking register button registration form must be displayed.


## registration page related information
###### Form should have 3 sections
1. Personal details
2. Educational background
3. preferences
#### 1. personal details 
+ personal details should contain name,dob,gender,address,current location,adhar number,phone number.
- name            : should be greater then 4 character and should be less then 25
- dob             : The person's year of birth should be 2006 or earlier(age>=18).
- gender          : should contain male,female and others options
- address         : This must be optional field
- current location: get current location through geo location or by getting pincode(optional)
- aadhar number   : length should be equal to 12
- phone number    : should contain country code with 10 digit phone number
  
+ make address and location as optional fields and all other as mandatory fields.
#### 2. educational background
- This section should contain 2 fields type and file.
  
- Type: a drop down menu for selecting highest qualification, options should be 1oth,12th,graduation,post graduation.
- File: this field is for uploding certidicate of user's highest qualification.type of the file should be jpeg,pdf or doc,file should be greater then 0kb and should not be greater then 5mb.
  
- all these should be optional fields.
#### 3. preferences
- This section should contain 3 fields job,type and location.
- job:
- preference section should contain the field to get the information about the field of the job user is looking for.
- should contain field to select type of the job (fulltime or parttime).
- job location preference
- all these fields are optional
***
### Recommendations
1. use json schema for validations.
2. use MUI for UI components.


