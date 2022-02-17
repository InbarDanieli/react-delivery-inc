import React, { useContext, useEffect, useState, } from 'react'
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

        <div className='dateAndName'>
          <p>{FullDate}</p>
          <p>{customers.find((customer) => customer?.id === ID)?.name}</p>
        </div>

        <div className='shipingID'>
          <p>Invoice</p>
          <p>No.{ID}</p>
        </div>

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

        <p>You received {currentPackage.length} packages <br />
          Thank you for using our services</p>
      </div>
    )
  }
  else return (
    <p>We couldn't find the id you loocking for :/</p>
  )
}

export default InvoiceCustomer