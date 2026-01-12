import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            console.log("the is the form data", data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='h-screen w-full bg-black flex items-center justify-center' >
            <div className='w-full max-w-2xl flex border border-emerald-400 rounded shadow-xl shadow-emerald-500 relative z-[99]' >

                {/* Register Form  */}
                <motion.div initial={{ x: -100 }} animate={{ x: 0 }}
                    className='w-full z-[99] bg-black ' >
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5' >
                        <h1 className='text-white text-center font-semibold text-lg' >Create an Account</h1>

                        {/* Full Name */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm' >Full Name</label>
                            <input
                                {...register("fullName", {
                                    required: "Full name is required",
                                    minLength: { value: 3, message: "Atleat 3 charater is required" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.fullName ? "border-red-500" : "border-white"}`}
                                type="text" />
                            {errors.fullName && (
                                <p className='text-red-500 text-[10px]' >{errors.fullName.message}</p>
                            )}
                        </div>

                        {/* username */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm' >Username</label>
                            <input
                                {...register("username", {
                                    required: "Username is required",
                                    minLength: { value: 3, message: "Atleat 3 charater is requied" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.username ? "border-red-500" : "border-white"}`}
                                type="text" />
                            {errors.username && (
                                <span className='text-red-500 text-[10px]'>{errors.username.message}</span>
                            )}
                        </div>

                        {/* mobile */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm' >Mobile</label>
                            <input
                                {...register("mobile", {
                                    required: "Mobile number is required",
                                    pattern: { value: /^[0-9]{10}$/, message: "10 digit are required" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.mobile ? "border-red-500 " : "border-white"}`}
                                type="tel" />
                            {errors.mobile && (
                                <span className='text-red-500 text-[10px]' >{errors.mobile.message}</span>
                            )}
                        </div>

                        {/* email */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm' >Email</label>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /\S+@\S+\.\S+/, message:"Invalid email" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.email ? "border-red-500" : "border-white"}`}
                                type="email" />
                            {errors.email && (
                                <span className='text-red-500 text-[10px]' >{errors.email.message}</span>
                            )}
                        </div>

                        {/* password */}
                        <div className='flex flex-col px-5 py-1' >
                            <label className='text-white text-sm' >Password</label>
                            <input
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Atleat 8 correct is required" }
                                })}
                                className={`bg-tranparent text-white border-b outline-0 ${errors.password ? "border-red-500" :"border-white"}`}
                                type="password" />
                            {errors.password && (
                                <span className='text-red-500 text-[10px]' >{errors.password.message}</span>
                            )}
                        </div>

                        <button type='submit' className='text-white bg-emerald-500 text-sm font-bold px-4 py-2 rounded' >Sign up</button>
                    </form>

                    {/* mobile login page switch button */}
                    <div className='text-white md:hidden '>
                        <p>Already an account?{" "}
                            <button type='button' className='text-emerald-500' >
                                Login
                            </button>
                        </p>
                    </div>
                </motion.div>

                {/* Information div */}
                <div className='w-full hidden md:flex flex-col items-center justify-center p-10 bg-black z-[99] relative' >
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity }}
                        className='h-full w-full hidden md:block absolute top-0 right-0 bg-emerald-400 rounded z-[9]' ></motion.div>
                    <div className='text-white z-[99] '>
                        <motion.h1 initial={{ y: -100 }} animate={{ y: -10 }}
                            className='text-black font-bold text-2xl text-center' >Welcome!</motion.h1>

                        {/* Switch to Login page button */}
                        <motion.p initial={{ x: 100 }} animate={{ x: 0 }}
                        >Already an account?{" "}
                            <button type='button' className='text-black font-bold underline' >
                                Login
                            </button>
                        </motion.p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Register;