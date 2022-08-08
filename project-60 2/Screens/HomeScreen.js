import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      all_students: [],
      indexPresent:-1,
      indexAbsent: -1
    };
  }

  presentPressed(id){
    
    var present=db.ref(id+'//')
    present.update({
      'Attendance':'Present'
    })
      this.setState({
      indexPresent:id-1,
      indexAbsent:-1
    })
  }
  absentPressed(id){
    var absent=db.ref(id+'//')
    absent.update({
      'Attendance':'Absent'
    })
   this.setState({
      indexAbsent:id-1,
      indexPresent:-1
    })
  }

  
  showStudentNames = async() => {
    var class_ref = await db.ref('/').on('value',data =>{
          var students = []
          var class_a = data.val();
          for(var student in class_a){
            students.push(class_a[student]);
          }
          students.sort(function(a,b){
            return a.roll_no - b.roll_no;
          });
          this.setState({all_students:students});
        });
  }

  componentDidMount(){
    this.showStudentNames();
  }

 render() {
    return (
      <View style={{ flex: 1, marginTop:-19 }}>
        <AppHeader/>
        <View>
  {this.state.all_students.map((student,index) => (
            <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left',marginTop:-15}}><Text>{student.roll_no}. {student.name}</Text><TouchableOpacity style = {[styles.button, {alignSelf:'center', width:150,marginTop:10, borderWidth:0.5},{backgroundColor:(this.state.indexPresent===index || student.Attendance === 'Present') ? 'green':'white'}]}
              onPress={()=>this.presentPressed(index+1)}><Text style = {styles.buttonText}>Present</Text></TouchableOpacity>
           <TouchableOpacity style = {[styles.button, {alignSelf:'center', width:150,marginTop:0,borderWidth:0.5},{backgroundColor:(this.state.indexAbsent===index || student.Attendance === 'Absent')? 'red':'white'}]}
              onPress={()=>this.absentPressed(index+1)}><Text style = {styles.buttonText}>Absent</Text></TouchableOpacity>
            </View>
          ))}
         <TouchableOpacity style = {[styles.button, {alignSelf:'center', width:500,marginTop:0,backgroundColor:'yellow', borderWidth:1}]}
          onPress ={() => this.props.navigation.navigate('ScreenSummeries')}><Text style = {styles.buttonText}>Submit</Text></TouchableOpacity>
        </View>
      </View>
    );
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
