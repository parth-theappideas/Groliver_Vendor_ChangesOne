import React, { useRef } from "react";
import { Text, Image, Dimensions, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Btn from "../components/Btn";
import Splash from "../screens/AuthModules/Splash/Splash";
import MyPager from "../screens/AuthModules/Introduction/Introduction";
import MySecondPage from "../screens/AuthModules/Introduction/IntroductionPage2";
import MyThirdPage from "../screens/AuthModules/Introduction/IntroductionPage3";
import Signin from "../screens/AuthModules/Signin/Signin";
import ForgotPassword from "../screens/AuthModules/ForgotPassword/ForgotPassword";
import ResetPassword from "../screens/AuthModules/ResetPassword/ResetPassword";
import Signup from "../screens/AuthModules/Signup/Signup";
import Terms from "../screens/AuthModules/TermsandConditions/Terms";
import Privacy from "../screens/AuthModules/PrivacyPolicy/Privacy";
import BottomNavigation from "./tab";
import Editprofile from "../screens/AppModules/EditProfile/Editprofile";
import Notification from "../screens/AppModules/Notification/Notification";
import OrdermanageDetail from "../screens/AppModules/OrdermanageDetail/OrdermanageDetails";
import OrderDetail from "../screens/AppModules/OrderDetail/OrderDetail";
import Help from "../screens/AppModules/Help/Help";
import Verification from "../screens/AuthModules/Verification/Verification";
import ProductDetail from "../screens/AppModules/ProductDetail/ProductDetail";
import Addnewproduct from "../screens/AppModules/Addnewproduct/Addnewproduct";
import EditProduct from "../screens/AppModules/Editproduct/Editproduct";
import { fs, hs, vs } from "../utils/stylesUtils";
import Dashboard from "./tab";
import Images from "../const/Images";
import InputBox from "../components/InputBox";
import ProductdetailModal from "../modals/Productdetailmodal";

const Stack = createNativeStackNavigator();

const Navigation = ({ navigation }) => {
    
    const modalizeRef = useRef(null);
    const onClose = () => {
        modalizeRef.current?.close();
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="MyPager" component={MyPager} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="MySecondPage" component={MySecondPage} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="MyThirdPage" component={MyThirdPage} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="Signin" component={Signin} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="Verification" component={Verification} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="Signup" component={Signup} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Signup'
                }} />

                <Stack.Screen name="Terms" component={Terms} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Terms and conditions'
                }} />

                <Stack.Screen name="Privacy" component={Privacy} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Privacy policy'
                }} />

                <Stack.Screen name="Dashboard" component={Dashboard} options={{
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitle: ''
                }} />

                <Stack.Screen name="Editprofile" component={Editprofile} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Edit profile'
                }} />

                <Stack.Screen name="Notification" component={Notification} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Notifications'
                }} />

                <Stack.Screen name="OrdermanageDetail" component={OrdermanageDetail} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Order Manage'
                }} />

                <Stack.Screen name="OrderDetail" component={OrderDetail} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Order Detail'
                }} />

                <Stack.Screen name="Help" component={Help} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Help'
                }} />

                <Stack.Screen name="ProductDetail" component={ProductDetail} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Product detail',
                    headerRight: () => (
                        <Btn
                            title="Add offer"
                            btnStyle={{
                                backgroundColor: '#009345',
                                borderRadius: 5,
                                justifyContent: 'center',
                                width: hs(80),
                            }}
                            onPress={() => modalizeRef.current.open()}
                            btnHeight={30}
                            textColor={'white'}
                            textSize={12}
                        />
                    )
                }} />

                <Stack.Screen name="Addnewproduct" component={Addnewproduct} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Add new product'
                }} />

                <Stack.Screen name="EditProduct" component={EditProduct} options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: 'Edit product'
                }} />
            </Stack.Navigator>
            
            <ProductdetailModal
                modalizeRef={modalizeRef}
                onClose={onClose}
            />
        </NavigationContainer>
    )
}

export default Navigation;