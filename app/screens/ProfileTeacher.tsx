import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { stylesProfile } from './stylesProfile';
import { SvgXml } from 'react-native-svg'; 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import BackIcon from '../../assets/back-icon.svg';
import { AuthContext } from '../../context/AuthContext';
import teacherProfile from '../../assets/teacherProfile.png';


const ProfileTeacher = () => {
    const { user, role, logout } = useContext(AuthContext);
    const navigation = useNavigation(); 

    const handleBackPress = () => {
        navigation.goBack();
    }

    const handleScoresPress = () => {
        navigation.navigate('Score');
    }

    const handleLogout = () => {
        logout();
        navigation.navigate('Login');
    }
    
    return (
        <View>
            <View style={stylesProfile.header}>
                <TouchableOpacity onPress={handleBackPress}>
                    <BackIcon width={30} height={30}/>
                </TouchableOpacity>
            </View>
            
            <View>
                
                <View style={stylesProfile.cover}>
                <ImageBackground
                    source={require('../../assets/cover.png')} 
                    style={{ flex: 1, width: '100%', height: '100%',}}
                    resizeMode="repeat" 
                />
                </View>
                <View style={stylesProfile.profileContainer}>
                <Image source={teacherProfile} style={stylesProfile.profilePicture} />
                </View>
                <View style={stylesProfile.whiteSpace}>
                    <TouchableOpacity onPress={handleLogout} style={stylesProfile.buttonContainer}>
                        <Text style={stylesProfile.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            <View style={stylesProfile.description}>
                
                <View style={stylesProfile.descTextContainer}>
                    
                    <Text style={stylesProfile.descText}>Username: {role === 'teacher' ? (user ? user.fname : '') : (user ? `${user.fname} ${user.lname}` : '')}</Text>
                </View>
            </View>
            {role === 'student' && (
                <View style={stylesProfile.scoreArea}>
                    <TouchableOpacity onPress={handleScoresPress} style={stylesProfile.scoreButton}>
                        <Text style={stylesProfile.scoreButtonText}>Score</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

export default ProfileTeacher;
