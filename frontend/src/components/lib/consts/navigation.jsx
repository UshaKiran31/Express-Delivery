import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineBell
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Overview',
		label: 'Overview',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'Track Shipment',
		label: 'Track Shipment',
		path: '/trackshipment',
		icon: <HiOutlineCube />
	},
	{
		key: 'Create Shipment',
		label: 'Create Shipment',
		path: '/sender-info',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Delivery History',
		label: 'Delivery History',
		path: '/delivery-history',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Help',//Supports
		label: 'Help',
		path: '/help',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'Feedback',
		label: 'Feedback',
		path: '/feedback',
		icon: <HiOutlineAnnotation />
	},
    {
		key: 'Notifications',
		label: 'Notifications',
		path: '/notifications',
		icon: <HiOutlineBell />
	},
    {
		key: 'Settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	}
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
];