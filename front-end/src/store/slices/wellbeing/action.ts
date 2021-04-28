import { createAsyncThunk } from '@reduxjs/toolkit';
import { Client } from '@App/helper/client';

interface Payload {
  path: string;
  type: string;
  page: number;
}

export const getWellbeingRequest = createAsyncThunk(
  'wellbeing/getWellbeingRequest',
  async (data: Payload, { rejectWithValue }) => {
    const { path, type, page } = data;
    try {
      const response = await Client({
        method: 'GET',
        path: `${path}?type=${type}&page=${page}`,
      });

      return response.data;
    } catch (e) {
      return rejectWithValue({ message: e.response.data.message });
    }
  }
);
