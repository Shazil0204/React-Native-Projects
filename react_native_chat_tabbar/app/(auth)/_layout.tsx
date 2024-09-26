// app/auth/_layout.tsx
import { Tabs } from "expo-router";

export default function AuthLayout() {
  console.log("THIS IS APP/(AUTH)/_LAYOUT:TSX");

  return (
    <>
      
      <Tabs screenOptions={{headerShown: false}} />
    </>
  );
}
