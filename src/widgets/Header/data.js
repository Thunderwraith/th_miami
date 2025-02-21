import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export const menuList = [
  {
    title: 'About',
    href: '/about',
    icon: <ArticleOutlinedIcon />
  },
  {
    title: 'Service',
    href: '/service',
    icon: <ManageAccountsIcon />
  },
  {
    title: 'Blogs',
    href: '/blogs',
    icon: <ChatOutlinedIcon />
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: <ContactSupportOutlinedIcon />
  },
]