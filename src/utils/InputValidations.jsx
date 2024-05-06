export const date_validation = {
    name: 'date',
    label: 'date',
    id: 'date',
    placeholder: 'dd/mm/yyyy',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
    },
}

export const income_validation = {
    name: 'name',
    label: 'Income',
    type: 'text',
    id: 'name',
    placeholder: 'Source of income',
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 30,
        message: '30 characters max',
      },
    },
  }
  
export const desc_validation = {
    name: 'description',
    label: 'description',
    multiline: true,
    id: 'description',
    placeholder: 'write description ...',
    validation: {
        required: {
        value: true,
        message: 'required',
        },
        maxLength: {
        value: 200,
        message: '200 characters max',
        },
    },
}

export const password_validation = {
    name: 'password',
    label: 'password',
    type: 'password',
    id: 'password',
    placeholder: 'type password ...',
    validation: {
        required: {
        value: true,
        message: 'required',
        },
        minLength: {
        value: 6,
        message: 'min 6 characters',
        },
    },
}

export const amount_validation = {
    name: 'num',
    label: 'Amount',
    type: 'number',
    id: 'num',
    placeholder: 'Amount earned',
    validation: {
        required: {
        value: true,
        message: 'required',
        },
        min: {
          value: 0.1,
          message: 'positive only',
        },
    },
}

export const email_validation = {
    name: 'email',
    label: 'email address',
    type: 'email',
    id: 'email',
    placeholder: 'write a random email address',
    validation: {
        required: {
        value: true,
        message: 'required',
        },
        pattern: {
        value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'not valid',
        },
    },
}