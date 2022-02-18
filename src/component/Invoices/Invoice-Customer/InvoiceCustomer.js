import React, { useContext, } from 'react'
import { useParams } from 'react-router-dom'
import UserContext from '../../../userContext'
import { PriceSum, WeightSum } from "../utils"
import "./InvoiceCustomers.css"

function InvoiceCustomer(props) {
  const { packages, customers } = useContext(UserContext)
  const { id } = useParams();
  const ID = parseInt(id);

  const today = new Date()
  const FullDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`

  const currentPackage = packages.filter((packages) => packages.customerid === ID)


  if (currentPackage.length) {
    return (
      <div className='invoice'>

        <div className='header'>
          <div className='date-and-time'>
            <p><u>{FullDate}</u></p>
            <p>{customers.find((customer) => customer?.id === ID)?.name}</p>
          </div>
          <div className='invoiceID'>
            <p><b>Invoice</b></p>
            <p><b>No.{ID}</b></p>
          </div>
        </div>

        <div className='shpping-body'>
          <div className='packageID'>
            <p>ID</p>
            {currentPackage.map((packages, index) => <p key={index}>{packages.id}</p>)}
          </div>

          <div className='weight'>
            <p>Weight</p>
            {currentPackage.map((packages, index) => <p key={index}>{packages.weight}</p>)}
            <p>{WeightSum(ID, packages)}</p>
          </div>

          <div className='price'>
            <p>Price</p>
            {currentPackage.map((packages, index) => <p key={index}>{packages.price}</p>)}
            <p>Total: {PriceSum(ID, packages)}</p>
          </div>
        </div>

        <p className='thank-you-text'>
          You received {currentPackage.length} packages
          <br />
          Thank you for using our services !</p>
      </div>
    )
  }
  else return (
    <p>We couldn't find the id you loocking for :/</p>
  )
}

export default InvoiceCustomer