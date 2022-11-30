import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';
import { authContext } from '../../../contexts/AuthContext';

const AddCar = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(authContext);
    const seller_email = user.email;
    const addProduct = (data) => {
        const image = data.picture[0];
        console.log("image: ", image);
        const formData = new FormData();
        formData.append("image", image);
        fetch(`https://api.imgbb.com/1/upload?expiration=600&key=${process.env.REACT_APP_imagebb_secret}`, {
            method: "POST",
            body: formData
        }).then(res => res.json())
            .then(Imagebbdata => {
                const url = Imagebbdata.data?.url;
                const newCar = {
                    category: data.category,
                    picture: url,
                    model: data.model,
                    price: data.price,
                    milege: data.milege,
                    seller: data.seller,
                    sellerEmail:seller_email,
                    originalPrice: data.originalPrice,
                    varified: true,
                    brand: data.brand,
                    phone: data.phone,
                    seats: data.seats,
                    color: data.color,
                    description: data.description
                };
                console.log(newCar);
                fetch(`http://localhost:4000/add-car`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newCar)
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            toast.success("New car added successfully!");
                            <Navigate to="/dashboard/my-products" />
                        };
                    }).catch(() => {
                        toast.error("Something went wrong")
                    })
            })
    };
    return (
        <div className='w-3/5'>
            <form onSubmit={handleSubmit(addProduct)}>
                <input {...register("brand", { required: "Brand is required!" })} type="text" placeholder="Brand" className="input input-bordered w-full mb-3" />
                {
                    errors.name && <p className='text-red-800'>{errors.brand.message}</p>
                }
                <input {...register("model", { required: "Model is required!" })} type="text" placeholder="Model" className="input input-bordered w-full mb-3" />
                {
                    errors.model && <p className='text-red-800'>{errors.model.message}</p>
                }
                <input {...register("category", { required: "category is required!" })} type="text" placeholder="Category" className="input input-bordered w-full mb-3" />
                {
                    errors.category && <p className='text-red-800'>{errors.category.message}</p>
                }
                <input {...register("price", { required: "price is required!" })} type="text" placeholder="Price" className="input input-bordered w-full mb-3" />
                {
                    errors.price && <p className='text-red-800'>{errors.price.message}</p>
                }
                <input {...register("originalPrice", { required: "Original price is required!" })} type="text" placeholder="Original price" className="input input-bordered w-full mb-3" />
                {
                    errors.originalPrice && <p className='text-red-800'>{errors.originalPrice.message}</p>
                }
                <input {...register("seller", { required: "Seller is required!" })} type="text" placeholder="Seller" className="input input-bordered w-full mb-3" />
                {
                    errors.seller && <p className='text-red-800'>{errors.seller.message}</p>
                }
                {/* <input {...register("sellerEmail", { required: "Seller email is required!" })} type="text" placeholder="sellerEmail" className="input input-bordered w-full mb-3" />
                {
                    errors.sellerEmail && <p className='text-red-800'>{errors.sellerEmail.message}</p>
                } */}
                <input {...register("picture", { required: "picture is required!" })} type="file" placeholder="Picture" className="input input-bordered w-full mb-3" />
                {
                    errors.picture && <p className='text-red-800'>{errors.picture.message}</p>
                }
                <input {...register("seats", { required: "seats is required!" })} type="number" placeholder="Seats" className="input input-bordered w-full mb-3" />
                {
                    errors.seats && <p className='text-red-800'>{errors.seats.message}</p>
                }
                <input {...register("milege", { required: "milege is required!" })} type="number" placeholder="milege" className="input input-bordered w-full mb-3" />
                {
                    errors.milege && <p className='text-red-800'>{errors.milege.message}</p>
                }
                <input {...register("color", { required: "color is required!" })} type="text" placeholder="Color" className="input input-bordered w-full mb-3" />
                {
                    errors.color && <p className='text-red-800'>{errors.color.message}</p>
                }
                <input {...register("phone", { required: "phone is required!" })} type="text" placeholder="Phone" className="input input-bordered w-full mb-3" />
                {
                    errors.phone && <p className='text-red-800'>{errors.phone.message}</p>
                }
                <input {...register("description", { required: "description is required!" })} type="text" placeholder="Description" className="input input-bordered w-full mb-3" />
                {
                    errors.description && <p className='text-red-800'>{errors.description.message}</p>
                }
                <button className="btn btn-primary w-full">Add</button>
            </form>
        </div>
    );
};

export default AddCar;