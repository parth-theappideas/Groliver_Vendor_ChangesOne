import React from "react"
import { View, ActivityIndicator, Text } from "react-native"
import { screenWidth, vs } from "../utils/stylesUtils";

const LoadingIndicator = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            bottom: 0,
        }}>
            <ActivityIndicator
                size={50}
                style={{
                    color: '#0000ff"',
                    backgroundColor: "#fff",
                    marginTop: vs(50),
                    width: screenWidth * 0.92,
                    height: vs(80),
                    borderWidth: 1,
                    borderColor: "#f2f2f2",
                    borderRadius: 5,
                    elevation:5,
                    shadowColor:'#000'
                }}
            />
        </View>
    )
}

export default LoadingIndicator;