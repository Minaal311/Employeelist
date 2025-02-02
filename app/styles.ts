import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    heading:{
        fontSize: 24,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:52,
    marginBottom:12
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f5f5f5',
        backgroundColor: 'pink',
        padding: 10,
        marginVertical: 8,
        borderRadius: 8,
        // width:200
      },
image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
  team: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
})