import axios from 'axios';
import { toast } from 'react-toastify';

const API_BASE_URL = 'http://localhost:8682';

const commonHeaders = {
  'Content-Type': 'application/json',
};

export const publicAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: commonHeaders,
});

export const privateJsonAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: commonHeaders,
});

export const privateFormDataAxios = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

privateJsonAxios.interceptors.request.use(
  async config => {
    const users = localStorage.getItem('persist:auth');
    const parsedUsers = JSON.parse(users);
    const tokens = parsedUsers.token.slice(1, -1);
    if (tokens) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${tokens}`;
      }
    } else {
      return;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

privateFormDataAxios.interceptors.request.use(
  async config => {
    const users = localStorage.getItem('persist:auth');
    const parsedUsers = JSON.parse(users);
    const tokens = parsedUsers.token.slice(1, -1);
    if (tokens) {
      if (config?.headers) {
        config.headers['Authorization'] = `Bearer ${tokens}`;
      }
    } else {
      return;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

publicAxios.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 500) {
      toast.error('Something went wrong. Please try again later.');
    }
    if (error.response.status === 400) {
      toast.error('Something went wrong. Please report us an error!');
    }
    if (
      error.response.status === 404 &&
      error.config.url === '/api/users/login'
    ) {
      toast.error('Incorrect password or email, try again');
    }
    if (
      error.response.status === 409 &&
      error.config.url === '/api/users/register'
    ) {
      toast.error(
        'User with such email is already exist, please enter another email.'
      );
    }
    return Promise.reject(error);
  }
);

privateFormDataAxios.interceptors.response.use(
  async response => {
    if ((response.data.status = 200)) {
      toast.success('Data were successfully updated');
      return response;
    }
    return response;
  },
  async error => {
    if (error.response.status === 500) {
      toast.error('Something went wrong. Please try again later.');
    }
    if (error.response.status === 401) {
      return (window.location.href = '/task-manager/authentication/login');
    }
    if (error.response.status === 400) {
      toast.error('Something went wrong. Please report us an error!');
    }
    if (error.response.status === 409) {
      toast.error(
        'User with such email is already exist, please enter another email'
      );
    }
    return Promise.reject(error);
  }
);

privateJsonAxios.interceptors.response.use(
  async response => {
    if (response.data.code === 201 && response.config.url === '/api/boards') {
      toast.success('New board successfully added');
      return response;
    }
    if (response.data.code === 200 && response.config.url === '/api/email') {
      toast.success('Your question sent. We answer your as soon as posiible.');
      return response;
    }

    if (response.data.code === 201 && response.config.url === '/api/columns') {
      toast.success('New column successfully added');
      return response;
    }

    if (response.data.code === 201 && response.config.url === '/api/tasks') {
      toast.success('New card successfully added');
      return response;
    }
    return response;
  },
  async error => {
    if (error.response.status === 500) {
      toast.error('Something went wrong. Please try again later.');
    }
    if (error.response.status === 401) {
      return (window.location.href = '/task-manager/authentication/login');
    }
    if (error.response.status === 400) {
      toast.error('Something went wrong. Please report the error to us!');
    }
    if (error.response.status === 409 && error.config.url === '/api/boards') {
      toast.error(
        'A board with that name already exists, please enter another name'
      );
    }
    return Promise.reject(error);
  }
);
