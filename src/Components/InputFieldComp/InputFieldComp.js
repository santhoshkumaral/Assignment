import { useField, ErrorMessage } from "formik";
import "./style.css";
const InputFieldComp = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            {/* <label htmlFor={field.name}>{label}</label> */}
            <input
                className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"
                    }`}
                {...field}
                {...props}
                placeholder={field.name}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    );
};
export default InputFieldComp;