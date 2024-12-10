import React from 'react';
import useAxiosSecure from '../../../../Components/Hooks/useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Components/Hooks/useAuth/useAuth';
import { FaAddressBook, FaAlignRight } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';

const colors = ['#00C49F', '#FFBB28', '#FF8042', 'red'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    // Get real-time date and format it
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Get all stats for admin dashboard
    const { data: stats, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const result = await axiosSecure.get('/admin-stats');
            return result.data;
        }
    });
    console.log(stats)

    if (error) {
        return <div className="text-center mt-10 text-lg text-red-500">Failed to load stats. Please try again later.</div>;
    }

    // Prepare the data for the bar and pie charts
    const chartData = [
        { name: 'Revenue', quantity: stats?.revenue },
        { name: 'Users', quantity: stats?.users },
        { name: 'Products', quantity: stats?.products },
        { name: 'Orders', quantity: stats?.orders },
    ];

    // Data for Pie Chart excluding Revenue
    const pieChartData = chartData.filter(item => item.name !== 'Revenue');

    // Chart custom bar shape function
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="bg-[#F8F9FA] px-4 py-6 min-h-screen">
            {/* Welcome Section */}
            <h1 className='text-3xl md:text-4xl font-semibold flex items-center gap-2 mt-5'>
                <span className="text-[#2D2D2D]">Hi, welcome</span>
                <span className='font-bold text-[#FF6B6B]'>
                    {user?.displayName ? user.displayName : 'Back'}
                </span>
            </h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {/* Revenue Card */}
                <div className="stat bg-white shadow-lg rounded-lg p-4">
                    <div className="stat-figure text-[#FFC107]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-[#6C757D]">Revenue</div>
                    <div className="stat-value text-3xl text-[#2D2D2D]">${stats?.revenue}</div>
                    <div className="stat-desc text-[#6C757D]">As of {currentDate}</div>
                </div>

                {/* Users Card */}
                <div className="stat bg-white shadow-lg rounded-lg p-4">
                    <div className="stat-figure text-[#4ECDC4]">
                        <FaAddressBook className='h-8 w-8' />
                    </div>
                    <div className="stat-title text-[#6C757D]">All Users</div>
                    <div className="stat-value text-3xl text-[#2D2D2D]">{stats?.users}</div>
                    <div className="stat-desc text-[#6C757D]">↗︎ 400 (22%)</div>
                </div>

                {/* Products Card */}
                <div className="stat bg-white shadow-lg rounded-lg p-4">
                    <div className="stat-figure text-[#FFCC00]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-8 w-8 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                        </svg>
                    </div>
                    <div className="stat-title text-[#6C757D]">Products</div>
                    <div className="stat-value text-3xl text-[#2D2D2D]">{stats?.products}</div>
                    <div className="stat-desc text-[#6C757D]">↘︎ 90 (14%)</div>
                </div>

                {/* Orders Card */}
                <div className="stat bg-white shadow-lg rounded-lg p-4">
                    <div className="stat-figure text-[#4ECDC4]">
                        <FaAlignRight className='h-8 w-8' />
                    </div>
                    <div className="stat-title text-[#6C757D]">Orders</div>
                    <div className="stat-value text-3xl text-[#2D2D2D]">{stats?.orders}</div>
                    <div className="stat-desc text-[#6C757D]">↘︎ 90 (14%)</div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="flex flex-col lg:flex-row mt-10 gap-8">
                {/* Bar Chart */}
                <div className="w-full lg:w-1/2">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="w-full lg:w-1/2">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={pieChartData} // Exclude revenue
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="quantity"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
