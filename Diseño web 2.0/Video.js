// Archivo: App.jsx
import React, { useState } from 'react';
import { 
  Layout, Menu, Button, Card, Table, Form, Input, 
  Select, DatePicker, Statistic, Avatar, Breadcrumb,
  Divider, Badge, Tag, Typography, Space
} from 'antd';
import {
  MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined,
  DashboardOutlined, FormOutlined, SettingOutlined,
  BellOutlined, SearchOutlined, TeamOutlined,
  FileTextOutlined, BarChartOutlined, CalendarOutlined
} from '@ant-design/icons';

const { Header, Sider, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { Option } = Select;

// Datos de ejemplo para la tabla
const dataSource = [
  {
    key: '1',
    name: 'Juan Pérez',
    age: 32,
    address: 'Calle Principal 23, Ciudad',
    tags: ['admin'],
    status: 'activo',
  },
  {
    key: '2',
    name: 'Ana García',
    age: 28,
    address: 'Avenida Central 45, Ciudad',
    tags: ['usuario'],
    status: 'inactivo',
  },
  {
    key: '3',
    name: 'Carlos López',
    age: 35,
    address: 'Calle Secundaria 12, Ciudad',
    tags: ['editor', 'admin'],
    status: 'activo',
  },
  {
    key: '4',
    name: 'María Rodríguez',
    age: 29,
    address: 'Plaza Mayor 8, Ciudad',
    tags: ['usuario'],
    status: 'activo',
  },
];

// Columnas para la tabla
const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Edad',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Dirección',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Estado',
    dataIndex: 'status',
    key: 'status',
    render: (status) => (
      <span>
        <Badge 
          status={status === 'activo' ? 'success' : 'default'} 
          text={status === 'activo' ? 'Activo' : 'Inactivo'} 
        />
      </span>
    ),
  },
  {
    title: 'Roles',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag === 'admin' ? 'red' : tag === 'editor' ? 'blue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Acciones',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Editar</a>
        <a>Eliminar</a>
      </Space>
    ),
  },
];

// Componente principal
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [form] = Form.useForm();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div style={{ height: 32, margin: 16, background: 'rgba(0, 0, 0, 0.2)', borderRadius: 6 }} />
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined />,
              label: 'Dashboard',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'Usuarios',
            },
            {
              key: '3',
              icon: <FormOutlined />,
              label: 'Formularios',
            },
            {
              key: '4',
              icon: <FileTextOutlined />,
              label: 'Reportes',
            },
            {
              key: '5',
              icon: <BarChartOutlined />,
              label: 'Estadísticas',
            },
            {
              key: '6',
              icon: <CalendarOutlined />,
              label: 'Calendario',
            },
            {
              key: '7',
              icon: <SettingOutlined />,
              label: 'Configuración',
            },
          ]}
        />
      </Sider>
      
      <Layout>
        {/* Header */}
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
              <Input 
                prefix={<SearchOutlined />} 
                placeholder="Buscar..." 
                style={{ width: 200, marginRight: 20 }} 
              />
              <Badge count={5}>
                <Button type="text" icon={<BellOutlined />} style={{ marginRight: 20 }} />
              </Badge>
              <Avatar icon={<UserOutlined />} />
              <Text style={{ marginLeft: 8 }}>Admin</Text>
            </div>
          </div>
        </Header>
        
        {/* Content */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff',
            borderRadius: 8,
          }}
        >
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { title: 'Inicio' },
              { title: 'Dashboard' }
            ]}
            style={{ marginBottom: 16 }}
          />
          
          <Title level={2}>Dashboard</Title>
          
          {/* Cards estadísticas */}
          <div style={{ display: 'flex', gap: 16, marginBottom: 24 }}>
            <Card style={{ flex: 1 }}>
              <Statistic
                title="Usuarios activos"
                value={112}
                valueStyle={{ color: '#3f8600' }}
                prefix={<TeamOutlined />}
              />
            </Card>
            <Card style={{ flex: 1 }}>
              <Statistic
                title="Proyectos"
                value={24}
                valueStyle={{ color: '#1677ff' }}
                prefix={<FileTextOutlined />}
              />
            </Card>
            <Card style={{ flex: 1 }}>
              <Statistic
                title="Tareas pendientes"
                value={8}
                valueStyle={{ color: '#cf1322' }}
                prefix={<FormOutlined />}
              />
            </Card>
            <Card style={{ flex: 1 }}>
              <Statistic
                title="Completado"
                value={76.5}
                precision={1}
                valueStyle={{ color: '#3f8600' }}
                suffix="%"
              />
            </Card>
          </div>
          
          {/* Tabla de usuarios */}
          <Title level={4}>Usuarios registrados</Title>
          <Table dataSource={dataSource} columns={columns} style={{ marginBottom: 24 }} />
          
          {/* Formulario de ejemplo */}
          <Divider />
          <Title level={4}>Agregar usuario</Title>
          <Form
            form={form}
            layout="vertical"
            initialValues={{ role: 'usuario' }}
            style={{ maxWidth: 600 }}
          >
            <Form.Item
              name="name"
              label="Nombre"
              rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Nombre completo" />
            </Form.Item>
            
            <Form.Item
              name="email"
              label="Correo electrónico"
              rules={[
                { required: true, message: 'Por favor ingrese el correo' },
                { type: 'email', message: 'Ingrese un correo válido' }
              ]}
            >
              <Input placeholder="ejemplo@correo.com" />
            </Form.Item>
            
            <Form.Item name="role" label="Rol">
              <Select placeholder="Seleccione un rol">
                <Option value="usuario">Usuario</Option>
                <Option value="editor">Editor</Option>
                <Option value="admin">Administrador</Option>
              </Select>
            </Form.Item>
            
            <Form.Item name="date" label="Fecha de ingreso">
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
            
            <Form.Item>
              <Button type="primary">Guardar</Button>
              <Button style={{ marginLeft: 8 }}>Cancelar</Button>
            </Form.Item>
          </Form>
        </Content>
        
        {/* Footer */}
        <Footer style={{ textAlign: 'center' }}>
          Ant Design Demo ©{new Date().getFullYear()} Creado con Ant Design
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;