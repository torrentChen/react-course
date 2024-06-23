import {z} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    age: z.number({invalid_type_error: "Age field is required"}).min(18, "age must be at least 18")
})

type  FormData = z.infer<typeof schema>
const Form = () => {
    const {register, handleSubmit, formState: {errors}, reset} = useForm<FormData>({resolver: zodResolver(schema)})

    const onSubmit = (data: FormData) => {
        console.log(data)
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 flex flex-col gap-2">
            <div>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className="border w-full py-2 rounded"
                />
                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    {...register("age", {valueAsNumber: true})}
                    className="border w-full py-2 rounded"
                />
                {errors.age && <p className="text-red-600">{errors.age.message}</p>}
            </div>
            <button type="submit" className="border self-start px-4 py-2 rounded-xl bg-blue-600 text-white">Submit</button>
        </form>
    );
};

export default Form;