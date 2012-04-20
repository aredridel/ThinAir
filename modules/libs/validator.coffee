check = require("validator").check
fs = require("fs")

Validator =
  validationErrors: []
  validate: validates = (modelName, object, callback) ->
    validationsFilePath = __dirname + "/../app/validations/" + modelName + ".validations.json"
    that = this
    fs.stat validationsFilePath, (err) ->
      unless err
        content = fs.readFileSync(validationsFilePath, "utf8")
        validations = JSON.parse(content)
        that.validationErrors = []
        for fieldValidationIndex of validations
          for fieldName of validations[fieldValidationIndex]
            that.validateField fieldName, validations[fieldValidationIndex][fieldName], object[fieldName]
        callback (if (that.validationErrors.length > 0) then that.validationErrors else null)
      else
        console.log "Error reading validations file."

  flashErrors: flashErrors = (req, errors) ->
    for errorIndex of errors
      @messages.addMessage req, "error", errors[errorIndex]

  validateField: validateField = (fieldName, fieldValidations, value) ->
    for validatorIndex of fieldValidations
      for validator of fieldValidations[validatorIndex]
        @useValidator fieldName, validator, fieldValidations[validatorIndex][validator], value

  useValidator: useValidator = (fieldName, validatorName, argument, value) ->
    switch validatorName
      when "minimumLength"
        @validatorMinimumLength fieldName, value, argument
      else
        console.log "Validator (" + validatorName + ") has not been found."

  validatorMinimumLength: validatorMinimumLength = (fieldName, value, length) ->
    errorMessage = "The value entered for \"" + fieldName + "\" (" + value + ") is too short (minimum of " + length + " character(s))."
    try
      check(value, errorMessage).len length
    catch e
      @validationErrors.push e.message

module.exports = Validator