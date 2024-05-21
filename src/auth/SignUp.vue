<script setup lang="ts">
import TextInput from "../components/ui/Input.vue";
import Label from "../components/ui/Label.vue";
import Button from "../components/ui/Button.vue";
import { ref } from 'vue';
import { account, ID } from "../lib/appwrite";

const emailValue = ref('');
const passwordValue = ref('');
const nameValue = ref('')
const rememberMe = ref(false);

const register = async () => {
  try {
    await account.create(ID.unique(), emailValue.value, passwordValue.value, nameValue.value);
    console.log('Account created successfully!');
  } catch (error) {
    console.error('Error creating account:', error);
  }
};
</script>

<template>
  <div class="bg-[#F3F4F6] h-screen w-screen flex justify-center items-center">
    <div
      class="mb-8 md:w-[450px] md:h-[580px] h-[550px] w-[300px] rounded-md bg-white flex flex-col justify-center items-center md:px-10 px-5"
    >
      <img src="../assets/logo.png" />
      <h3 class="mb-1 font-bold ">Welcome back!</h3>
      <p class="mb-4 text-[#6B7280] text-xs md:text-sm text-center">
        Please enter your credentials to register!
      </p>

      <div class="mb-2">
        <Label htmlFor="email" labelText="Email" labelClass="text-[#6B7280]" />
        <TextInput
          type="text"
          v-model="emailValue"
          placeholder="Enter your name"
          inputClass="border mt-1 h-12 md:w-[400px] w-[250px] rounded-md p-2"
        />
      </div>

      <div class="mb-2">
        <Label htmlFor="name" labelText="Name" labelClass="text-[#6B7280]" />
        <TextInput
          type="text"
          v-model="nameValue"
          placeholder="Enter your name"
          inputClass="border mt-1 h-12 md:w-[400px] w-[250px] rounded-md p-2"
        />
      </div>

      <div class="mb-2">
        <Label
          htmlFor="password"
          labelText="Password"
          labelClass="text-[#6B7280]"
        />
        <TextInput
          v-model="passwordValue"
          placeholder="Enter your password"
          inputClass="border mt-1 h-12 md:w-[400px] rounded-md p-2 w-[250px] "
        />
      </div>

      <div class="mb-2 flex w-full justify-between items-center ">
        <div>
          <TextInput type="checkbox" v-model="rememberMe" />
          <Label
            htmlFor="rememberme"
            labelText="Remember Me"
            labelClass="text-[#6B7280] ml-2 text-xs md:text-sm"
          />
        </div>
        <span class="text-[#6366F1] text-xs md:text-sm">forgot password? </span>
      </div>

      <div class="mt-2">
        <Button
          ButtonTitle="sign Up"
          inputClass="bg-[#4F46E4] px-4 py-4 md:w-[400px] w-[250px]  rounded-md text-white capitalize"
          @click="register"
        />
      </div>

      <div class="mt-2  text-xs md:text-sm">
        <p class="font-bold">
          Don't have an account, <span class="text-red-500">Sign in</span>
        </p>
      </div>
    </div>
  </div>
</template>
