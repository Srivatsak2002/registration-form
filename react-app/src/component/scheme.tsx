import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';
import Form from '@rjsf/mui';
import { red } from '@mui/material/colors';

const schema: RJSFSchema = {
    "title": "Form-details",
    "type": "object",
    "properties": {
        "personal_details": {
            "type": "object",
            "properties": {
                "name": {
                    "type": "string",
                    "minLength": 4,
                    "maxLength": 25
                },
                "date_of_birth": {
                    "type": "string",
                    "format": "date"
                },
                "age": {
                    "type": "integer",
                    "minimum": 16
                },
                "gender": { "enum": ["male", "female", "others"] },
                "address": { "type": "string" },
                "pin_code": {
                    "type": "string",
                    "pattern": "\\d{6}"
                },
                "id_proof": {
                    "type": "object",
                    "properties": {
                        "type": {
                            "type": "string",
                            "enum": ["Aadhar", "Voter-ID", "PAN", "Driving-License"]
                        },
                        "number": {
                            "type": "string"
                        }
                    },
                    "required": ["type", "number"]
                },
                "current_location": { "type": "string" },
                "mobile_number": {
                    "type": "object",
                    "properties": {
                        "country_code": {
                            "type": "string",
                            "pattern": "^\\+[1-9][0-9]{0,2}$"
                        },
                        "number": {
                            "type": "string",
                            "pattern": "^\\d+$"
                        }
                    },
                    "required": ["country_code", "number"]
                },
                "email": {
                    "type": "string",
                    "format": "email"
                }
            },
            "required": ["name", "date_of_birth", "age", "gender", "id_proof", "mobile_number"]
        },
        "education_qualifications": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "education_type": {
                        "enum": ["SSLC", "2nd-PUC", "Under-Graduation", "Post-Graduation"]
                    },
                    "file": {
                        "type": "string",
                        "format": "data-url"
                    }
                }
            }
        },

        "preferences": {
            "type": "object",
            "properties": {
                "job_preferences": {
                    "type": "object",
                    "properties": {
                        "job": { "type": "string" },
                        "type": { "enum": ["full-time", "part-time", "internship"] },
                        "location": { "type": "string" },
                        "mode": { "enum": ["work-from-home", "work-from-office"] }
                    }
                },
                "course_preferences": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": { "type": "string" },
                            "type": { "enum": ["Technical-Course", "Business-Course", "Creative-Course", "Language-Course", "Personal-Development-Course", "Hobby-Course"] },
                            "mode": { "enum": ["Online", "Offline"] },
                            "language": { "enum": ["Kannada", "English", "Telugu", "Tamil", "Hindi", "Other"] }
                        }
                    }
                }
            }
        }
    }
}


const uiSchema: UiSchema = {
    "personal_details": {
        "name": {
            'ui:classNames': 'button',
            "ui:autofocus": true,
            "ui:emptyValue": "",
            "ui:autocomplete": "family-name"

        }
    }
}

const GetSchema = () => {
    return (<div className="App">
        <Form
            schema={schema}
            validator={validator}
            uiSchema={uiSchema}>
            <div>
                <button className='button' type='submit'>Submit</button>
                <button type='button'>Cancel</button>
            </div>
        </Form>

    </div>
    )
}

export default GetSchema;