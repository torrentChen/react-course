import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">
                    <div className="flex">
                        <div className="space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <Link to="/game" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Game</Link>
                            <Link to="/expense-tracker" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">expense-tracker</Link>
                            <Link to="/react-query" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">react-query</Link>
                            <Link to="/state-management" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">state-management</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;