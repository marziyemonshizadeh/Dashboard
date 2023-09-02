import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoundedImg from "../../components/roundedImg/roundedImg";
import { products } from "../../datas";

export default function users() {
  const [productsData, setProductsData] = useState(products);

  const productDelete = (productID) => {
    setProductsData(productsData.filter((product) => product.id != productID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "avatar",
      headerName: "picture",
      width: 90,
      renderCell: (params) => {
        return <RoundedImg src={params.row.avatar} alt="avatar" />;
      },
    },
    {
      field: "title",
      headerName: "Procuct",
      width: 200,
      renderCell: (params) => {
        return (
          <Link
            // to="#"
            to={`/product/${params.row.id}`}
            className="text-decoration-none text-dark"
          >
            <span className="mx-1">{params.row.title}</span>
          </Link>
        );
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="d-flex align-items-center  gap-3">
            <Link
              to={`/product/${params.row.id}`}
              className="text-decoration-none"
            >
              <Button color="secondary">Edit</Button>
            </Link>
            <DeleteIcon
              className="text-decoration-none"
              color="secondary"
              onClick={() => productDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div dir="ltr" className="my-3" style={{ height: "100vh" }}>
      <Box sx={{ height: 400, width: "100%" }} className="card">
        <DataGrid
          rows={productsData}
          columns={columns}
          disableSelectionOnClick
          pageSize={3}
        />
      </Box>
    </div>
  );
}
