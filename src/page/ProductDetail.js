import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction'
const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null);
  // const product = useSelector((state) => state.product.selectedItem)
  // const dispatch = useDispatch()
  const getProductDetail = async () => {
    // dispatch(productAction.getProductDetail(id))
    let url = `https://my-json-server.typicode.com/SeungwonOck/chris-hnm-router-practice/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, [])
  return (
    <Container>
      <Row>
        <Col className="product-img ">
          <img src={product?.img}/>
        </Col>
        <Col>
          <div className="product-title">{product?.title}</div>
          <div className="product-price">{product?.price}</div>
          <div className="product-choice">{product?.choice == true ? "Conscious Choice" : ""}</div>
          <div className="product-new">{product?.new == true ? "신제품" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ marginBottom: '20px' }}>
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" style={{ padding: '10px 20px' }}>추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
