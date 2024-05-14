import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import DataInputs from "../DataInputs/ExpensesDataInputs";
import SuccessMessage from "../Messages/SuccessMessage";

export default function ExpensesForm() {
    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        methods.reset();
        setSuccess(true);
    })

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={e => e.preventDefault()}
                noValidate
                className="container"
            >
                <DataInputs />

                <div className="flex flex-col items-center mt-5">

                    <SuccessMessage success={success} />

                    <button
                        onClick={onSubmit}
                        className="flex items-center gap-1 p-4 px-6 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </FormProvider>
    )
}