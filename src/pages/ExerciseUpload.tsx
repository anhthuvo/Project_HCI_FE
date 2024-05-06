import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Button, Form, Input, Upload, Select, InputNumber } from 'antd';
import { CATEGORIES } from '../constant';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import type { UploadFile, UploadProps } from 'antd';

const fileList: UploadFile[] = [
  {
    uid: '0',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
];

const VideoUploadProps: UploadProps = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};

const ExerciseUpload: React.FC = () => {
  const [item, setItem] = useState({});

  const onFinish = (values: any) => {
    console.log(values);
  };

  useEffect(() => {
    const data = {

    }
    setItem(data)
  }, [])
  return (
    <>
      <Header />
      <img src={'/banner.png'} className='w-full' />
      <div className="container mx-auto">
        <h1 className="text-3xl mt-10 font-medium">Exercise Upload</h1>
        <p className="text-red-500 my-10">* IS REQUIRED</p>
        <Form
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: '100%' }}
          layout="vertical"
          className='flex flex-wrap'
        >
          <div className="w-1/2">
            <Form.Item name={'name'} label="NAME EXERCISE" rules={[{ required: true }]} className="">
              <Input />
            </Form.Item>
            <Form.Item name={'description'} label="EXERCISE DESCRIPTION" className="">
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={'category'} label="CATEGORY" rules={[{ required: true }]} className="">
              <Select
                mode="multiple"
                style={{ minWidth: '10rem' }}
                options={CATEGORIES}
              />
            </Form.Item>
          </div>
          <div className="w-1/2 pl-10">
            <p className="mb-2">THUMBNAIL PICTURE</p>
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture"
              defaultFileList={[]}
              className="upload-list-inline"
            >
              <Button className="h-max border-none p-0">
                <div className="">
                  <img src={'/icon-upload.png'} className='w-60 mx-auto' />
                </div>
              </Button>
            </Upload>
          </div>
          <div className="flex w-full gap-x-8">
            <div className="w-1/4">
              <Form.Item label="SET AMOUNT">
                <InputNumber className='w-full' />
              </Form.Item>
            </div>
            <div className="w-2/4">
              <Form.Item name={"set_type"} label="SET TYPE" rules={[{ required: true }]} className="">
                <Select
                  mode="multiple"
                  style={{ minWidth: '10rem' }}
                  options={CATEGORIES}
                />
              </Form.Item>
            </div>
            <div className="w-1/4">
              <Form.Item name={"set_amount"} label="SET AMOUNT" >
                <InputNumber className='w-full' />
              </Form.Item>
            </div>
          </div>
          <div className="mb-10">
            <p className="mb-2">UPLOAD EXERCISE (File .mp4)</p>
            <Upload
              defaultFileList={[]}
              className="upload-list-inline"
              {...VideoUploadProps}
            >
              <Button className="h-max py-4 border-none p-0">
                <div className="">
                  <img src={'/icon-upload.png'} className='w-60 mx-auto' />
                </div>
              </Button>
            </Upload>
          </div>
          <div className="w-full flex">
            <Form.Item>
              <Link to="/exercises">
              <Button type="primary" htmlType="submit" className='mr-10 bg-orange-300'
              >
                CANCEL
              </Button>
              </Link>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                UPLOAD
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ExerciseUpload;