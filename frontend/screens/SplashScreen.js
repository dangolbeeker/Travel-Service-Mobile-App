import Video from 'react-native-video'

class SplashScreen extends Component {

componentWillMount () {
        var navigator = this.props.navigator;
        setTimeout (() => {

          navigator.replace({
                component: LoginScreen,
                 // <-- This is the View you go to
            });
        }, 5000);     //<-- Time until it jumps to "MainView"
    }
    render () {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',width:null,height:null}}>
               <Video source={require('./images/splashVideo.mp4')}
                     style={{position: 'absolute',
                             top: 0,
                             left: 0,
                             right: 0,
                             bottom: 0,
                             opacity: 0.3}}
                             muted={true}
                             repeat={true}
                             resizeMode="cover"      />
               <View>{StatusBar.setBackgroundColor('black', true)}</View> 
               {/*<Image style={{ width: windowSize.width, height: windowSize.height}} source={require('./images/splash.png')}></Image>*/} 
            </View>
        );
    }
}


//BACK BUTTON

BackAndroid.addEventListener('hardwareBackPress', () => {
    const { navigator } = this.props
    var routes = navigator.getCurrentRoutes()

    if(routes[routes.length - 1].id == 'main' || routes[routes.length - 1].id == 'login') {
        return false;
    }
    else {
        this.popRoute();
        return true;
    }
});