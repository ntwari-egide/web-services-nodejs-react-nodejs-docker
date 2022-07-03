import { Layout, Menu, Image } from 'antd';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;
import {MdOutlineDashboard} from 'react-icons/md'
import {BsCalendarCheck} from 'react-icons/bs'
import {FiSettings} from 'react-icons/fi'
import { Input } from 'antd';
import {FiSearch} from 'react-icons/fi'


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Home', '1', <MdOutlineDashboard />),
  getItem('Voting', '2', <BsCalendarCheck />),
  getItem('Settings', '3', <FiSettings />),
];

export const LayoutDashboard = (props) => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
      className="sticky-top"

    >
      <Sider collapsible collapsed={collapsed} theme="light" className=' border-end border ' onCollapse={(value) => setCollapsed(value)}>
        <div className='container mt-5 mb-5'>
            <Image 
                className='rounded-circle border_red'
                width={'80px'}
                preview={false}
                height={'80px'}
                src={'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            />

            <h2 className=' text-center display-6 mt-4' style={{ fontSize: '16px', fontWeight: 'bold'}}>Vottingg</h2>
        </div>
        <Menu theme="light" defaultSelectedKeys={['2']} mode="inline" items={items} />
      </Sider>
      <Layout className="site-layout" >
        <Header
          className="site-layout-background border-1 border-bottom sticky-top"
          style={{
            padding: 0,
          }}
        >
            <Input placeholder="Search" className=' w-50 h-60' prefix={<FiSearch />} />
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          {props.children}
        </Content>
        
      </Layout>
    </Layout>
  );
}