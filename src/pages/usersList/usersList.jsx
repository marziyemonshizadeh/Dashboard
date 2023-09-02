import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import RoundedImg from "../../components/roundedImg/roundedImg";
import { userRows } from "../../datas";

export default function users() {
  const [userDatas, setUserDatas] = useState(userRows);

  const userDelete = (userID) => {
    setUserDatas(userDatas.filter((user) => user.id != userID));
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="#" className="text-decoration-none text-dark">
            <div className="d-flex align-items-center">
              <RoundedImg src={params.row.avatar} alt="avatar" />
              <span className="mx-1">{params.row.username}</span>
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="d-flex align-items-center  gap-3">
            <Link
              to="#"
              // to={`/user/${params.row.id}`}
              className="text-decoration-none"
            >
              <Button color="secondary">Edit</Button>
            </Link>
            <DeleteIcon
              className="text-decoration-none"
              color="secondary"
              onClick={() => userDelete(params.row.id)}
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
          rows={userDatas}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableSelectionOnClick
          // pageSize={4}
        />
      </Box>
    </div>
  );
}
