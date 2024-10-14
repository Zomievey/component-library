import React, { useEffect, useState, useCallback } from "react";
import { getUsers } from "../../services/GetUsers";
import CommonButton from "../../common/commonButton/CommonButton";
import CommonSpinner from "../../common/commonSpinner/CommonSpinner";
import UserAddress from '../userAddress/UserAddress';
import { Address } from '../../types/Address';

interface Users {
  name: string;
  email: string;
  id: number;
  phone: string;
  website: string;
  address: Address
}

export default function Homepage() {
  const [users, setUsers] = useState<Users[]>([]);
  const [dataLoading, setDataLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<Users | null>(null);

  useEffect(() => {
    setDataLoading(true);
    getUsers()
      .then((fetchedUsers) => {
        setUsers(fetchedUsers);
        setDataLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setDataLoading(false);
      });
  }, []);

  const getRandomUser = useCallback(() => {
    if (users.length === 0) return; // Add this to avoid errors if there are no users
    const randomIndex = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIndex];
    setCurrentUser(selectedUser);
  }, [users]);

  useEffect(() => {
    if (users.length > 0) {
      getRandomUser();
    }
  }, [users, getRandomUser]);

  return (
    <div className='container d-flex flex-column align-items-center vh-100'>
      {dataLoading ? (
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <CommonSpinner />
        </div>
      ) : (
        <>
          <div className='col-5'>
            <div className='card p-4'>
              <h4 className='mb-3 text-center'>Current User</h4>
              {currentUser ? (
                <div>
                  <h5 className='card-title'>{currentUser.name}</h5>
                  <p className='card-text'>
                    <strong>Email:</strong> {currentUser.email}
                  </p>
                  <p className='card-text'>
                    <strong>Phone:</strong> {currentUser.phone}
                  </p>
                  <p className='card-text'>
                    <strong>Website:</strong>{" "}
                    <a
                      href={`http://${currentUser.website}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {currentUser.website}
                    </a>
                  </p>
                  <hr />
                  <UserAddress address={currentUser?.address} />
                </div>
              ) : (
                <p>No user selected</p>
              )}
            </div>
          </div>
          <div className='mt-4'>
            <CommonButton
              buttonType='button'
              text={"Change User"}
              width={150}
              fontSize={16}
              isLoading={false}
              onClick={getRandomUser}
            />
          </div>
        </>
      )}
    </div>
  );
}
