import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';

export default class ScreenSummeries extends React.Component {

  constructor() {
    super();
    this.state = {
      all_students: [],
    };
  }

  readDatabase = async() => {
    var class_ref = await db.ref('/').on('value',data =>{
          var students = []
          var class_a = data.val();
          for(var student in class_a){
            students.push(class_a[student]);
          }
          students.sort(function(a,b){
            return a.roll_no - b.roll_no;
          });
          this.setState({all_students:students});
        });
  }

  

  componentDidMount(){
    this.readDatabase();
 }
 
  render(){
    var noOfPresentStudents=0;
    var noOfAbsentStudents=0;
   
    this.state.all_students.forEach((student,index) => {
      if(student.Attendance === 'Present')
      return noOfPresentStudents++
      if(student.Attendance === 'Absent')
      return noOfAbsentStudents++
})
    return(
      <View style={{ flex: 1 }}>
        <AppHeader/>
      <View style={{marginTop:10,fontSize:50}}><Text>Present: {noOfPresentStudents}</Text><Text>Absent: {noOfAbsentStudents}</Text></View><TouchableOpacity style = {[styles.button, {alignSelf:'center', width:500,marginTop:40,backgroundColor:'yellow', borderWidth:1}]}
onPress ={() => this.props.navigation.navigate('HomeScreen')}><Text style = {styles.buttonText}>Back</Text></TouchableOpacity></View>
      
    )
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius:10,
    borderWidth: 2,
    marginTop: 10,
    width: 100,
    height: 40
  },
  buttonText:{
    color: 'black',
    textAlign: 'center',
  },
  buttonContainer:{
    alignSelf:'center',
    marginTop: 50
  }
});