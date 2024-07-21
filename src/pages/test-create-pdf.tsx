import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import dynamic from 'next/dynamic'

const PDFViewer = dynamic(() => import('@react-pdf/renderer').then((mod) => mod.PDFViewer), { ssr: false })

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  header: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    fontSize: 14,
  },
})

// Long text content
const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, 
nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. 
Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. 
Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. 
Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. 
Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. 
In hac habitasse platea dictumst.

Fusce convallis, mauris imperdiet gravida bibendum, nisl turpis suscipit mauris, 
quis ultricies libero dolor eget purus. Etiam imperdiet, urna in pulvinar sollicitudin, dolor felis ultricies mauris, 
id mollis enim velit non risus. Phasellus tristique purus a enim. Etiam mauris lectus, bibendum sit amet, vulputate eget, porta id, lectus. 
Maecenas feugiat. Maecenas feugiat. Maecenas feugiat. Maecenas feugiat. Maecenas feugiat.
`

const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Text style={styles.header}>Header: Page 1</Text>
      <View style={styles.section}>
        <Text style={styles.text}>{longText}</Text>
      </View>
    </Page>
    <Page size='A4' style={styles.page}>
      <Text style={styles.header}>Header: Page 2</Text>
      <View style={styles.section}>
        <Text style={styles.text}>{longText}</Text>
      </View>
    </Page>
  </Document>
)

const CreatePage = () => (
  <PDFViewer width='100%' height='600'>
    <MyDocument />
  </PDFViewer>
)

export default CreatePage
