import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from '@App/helper/client';

interface Payload {
  path: string;
  page: number;
}

export const getAlertRequest = createAsyncThunk(
  'alert/getAlertRequest',
  async (data: Payload, { rejectWithValue }) => {
    const { path, page } = data;
    try {
      const response = await Client({
        method: 'GET',
        path: `${path}?page=${page}`,
      });

      return response.data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data.message });
    }
  }
);
