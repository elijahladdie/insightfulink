import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormData {
    title: string;
    subtitle: string;
    coverImage: File | null;
    author: string;
    document: File | null;
}
interface NewBookProp {
    action?: string
}
const NewBook: React.FC<NewBookProp> = ({ action }) => {
    const [formData, setFormData] = useState<FormData>({
        title: "",
        subtitle: "",
        coverImage: null,
        author: "",
        document: null,
    });

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    console.log(action)
    const handleFileInputChange = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        const { name, files } = e.target;
        if (files && files.length > 0) {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // Here you can submit the form data
    };

    return (
        <form
            className=" rounded-md text-sm space-y-4 p-3"
            onSubmit={handleSubmit}
        >
            <div className="flex w-full gap-4">
                <div className="w-full ">
                    <label>Book Title</label>
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="E.g: Bird Sing"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        className="block w-full outline-none rounded-md px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    />
                </div>
                <div className="w-full">
                    <label>Book author </label>
                    <br />
                    <input
                        type="text"
                        required
                        placeholder="Eg: John doe"
                        name="author"
                        value={formData.author}
                        onChange={handleInputChange}
                        className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    />
                </div>

            </div>
            <div>
                <div className="flex w-full gap-4">
                    <div className="w-full">
                        <label>Book Cover Image</label>
                        <br />
                        <input
                            type="file"
                            required
                            name="coverImage"
                            onChange={handleFileInputChange}
                            className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                        />
                    </div>

                    <div className="w-full">
                        <label>Book Document</label>
                        <br />
                        <input
                            type="file"
                            required
                            name="document"
                            onChange={handleFileInputChange}
                            className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                        />
                    </div>

                </div>
                <div className="w-full">
                    <label>Book Subtitle </label>
                    <br />
                    <textarea
                        // onResize={false}
                        required
                        placeholder="hint: Add meaning subtitle of this book"
                        name="subtitle"
                        value={formData.subtitle}
                        onChange={handleInputChange}
                        className="block w-full outline-none rounded-md border-0 px-4 py-2 text-gray-900 ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6"
                    />
                </div>
            </div>

            <div className="flex justify-between flex-end">
                <button
                    type="submit"
                    className="bg-custom-tomato text-white px-2 mt-4 rounded-md py-2 w-full"
                >
                    {action === "new" ? "Register" : "Update"}
                </button>
            </div>
        </form>
    );
};

export default NewBook;
