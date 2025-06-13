const App = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!email || !password) {
            setMessage('Please enter both email and password.');
            return;
        }
        setMessage(`Logging in with Email: ${email}, Password: ${password} (Simulated)`);
        // Here you would typically make an API call to your backend
        // For this example, we'll just simulate a login
        // Replace with actual API call:
        // try {
        //     const response = await fetch('/api/login', {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json' },
        //         body: JSON.stringify({ email, password }),
        //     });
        //     const data = await response.json();
        //     if (response.ok) {
        //         setMessage(data.message || 'Login successful!');
        //         // Handle successful login (e.g., redirect, store token)
        //     } else {
        //         setMessage(data.error || 'Login failed.');
        //     }
        // } catch (error) {
        //     setMessage('An error occurred. Please try again.');
        // }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                    {message && (
                        <p className="mt-4 text-center text-sm text-gray-600">
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
