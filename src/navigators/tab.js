import React from "react";
import { View, Text, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import OrderManage from "../screens/AppModules/OrderManage/OrderManage";
import Images from "../const/Images";
import Myproducts from "../screens/AppModules/MyProducts/Myproducts";
import Wallet from "../screens/AppModules/Wallet/Wallet";
import Transactions from "../screens/AppModules/Transactions/Transactions";
import Profile from "../screens/AppModules/Profile/Profile";
import { fs, hs, vs } from "../utils/stylesUtils";

const Tabs = createBottomTabNavigator();

const Dashboard = () => {
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: vs(70),
                backgroundColor: 'white',
                // position:'absolute'
                borderTopColor: 'white',
                shadowColor: "white",
            }

        }}>
            <Tabs.Screen
                name="OrderManage"
                component={OrderManage}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        if (focused) {
                            return <Image source={Images.home_act} style={{
                                width: hs(30),
                                height: vs(30),
                                resizeMode: 'contain'
                            }} />
                        } else
                            return <Image source={Images.home} style={{
                                width: hs(20),
                                height: vs(20),
                                resizeMode: 'contain',
                                tintColor:'gray'
                            }} />
                    }
                    ,
                    tabBarActiveTintColor: '#FF7900',
                    tabBarInactiveTintColor: '#f2f2f2',
                    headerShown: true,
                    headerTitle: 'Dashboard',
                    headerTitleStyle: {
                        fontSize: fs(30),
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    tabBarShowLabel: false,
                    tabBarIconStyle: {
                        color: '#ff7900'
                    },
                }}
            />

            <Tabs.Screen
                name="Myproducts"
                component={Myproducts}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        if (focused) {
                            return <Image source={Images.product_act} style={{
                                width: hs(30),
                                height: vs(30),
                                resizeMode: 'contain'
                            }} />
                        } else
                            return <Image source={Images.product} style={{
                                width: hs(20),
                                height: vs(20),
                                resizeMode: 'contain',
                                tintColor:'gray'
                            }} />
                    },
                    headerTitle: 'My Products',
                    headerTitleStyle: {
                        fontSize: fs(30),
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    tabBarActiveTintColor: '#FF7900',
                    tabBarInactiveTintColor: '#f2f2f2',
                    headerShown: true,
                    tabBarShowLabel: false,
                }}
            />

            <Tabs.Screen
                name="Wallet"
                component={Wallet}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        if (focused) {
                            return <Image source={Images.wallet_act} style={{
                                width: hs(30),
                                height: vs(30),
                                resizeMode: 'contain'
                            }} />
                        } else
                            return <Image source={Images.wallet} style={{
                                width: hs(20),
                                height: vs(20),
                                resizeMode: 'contain',
                                tintColor:"gray"
                            }} />
                    },
                    headerTitle: 'My Wallet',
                    headerTitleStyle: {
                        fontSize: fs(30),
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    tabBarActiveTintColor: '#FF7900',
                    tabBarInactiveTintColor: '#f2f2f2',
                    headerShown: true,
                    tabBarShowLabel: false,
                }}
            />

            <Tabs.Screen
                name="Transactions"
                component={Transactions}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        if (focused) {
                            return <Image source={Images.transaction_act} style={{
                                width: hs(30),
                                height: vs(30),
                                resizeMode: 'contain'
                            }} />
                        } else
                            return <Image source={Images.transaction} style={{
                                width: hs(20),
                                height: vs(20),
                                resizeMode: 'contain',
                                tintColor: "gray"
                            }} />
                    },
                    headerTitle: 'Transactions',
                    headerTitleStyle: {
                        fontSize: fs(30),
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    tabBarActiveTintColor: '#FF7900',
                    tabBarInactiveTintColor: '#f2f2f2',
                    headerShown: true,
                    tabBarShowLabel: false,
                }}
            />

            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ size, color, focused }) => {
                        if (focused) {
                            return <Image source={Images.profile_act} style={{
                                width: hs(30),
                                height: vs(30),
                                resizeMode: 'contain'
                            }} />
                        } else
                            return <Image source={Images.profile_1} style={{
                                width: hs(20),
                                height: vs(20),
                                resizeMode: 'contain',
                                tintColor: "gray"
                            }} />
                    },
                    headerTitle: 'Profile',
                    headerTitleStyle: {
                        fontSize: fs(30),
                        color: '#000',
                        fontWeight: 'bold'
                    },
                    tabBarActiveTintColor: '#FF7900',
                    tabBarInactiveTintColor: '#f2f2f2',
                    headerShown: true,
                    tabBarShowLabel: false,
                }}
            />
        </Tabs.Navigator>

    )
}

export default Dashboard;