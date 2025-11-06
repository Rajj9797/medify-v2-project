import Stack from "@mui/material/Stack";
import Logo from "../../Assets/navbar/logo.png"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";
import { useOutletContext } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

export default function Navbar({home=false}) {

    const {isMobile
    } = useOutletContext();

    const [isMenu, setIsMenu] = useState(false);

    return (
        <div>
            {
                home && (
                    <div className={styles.nav}>

                        <Stack direction="row" spacing={2}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%",
                            position: "relative"
                        }}
                        >
                            <div className={styles.logoDiv}>
                                <img src={Logo} alt='logo-icon' />
                            </div>
                            

                            <Stack direction={isMobile ? "column" : "row"} spacing={2} 
                            sx={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                width: "60%",
                                padding: "10px",
                                position: "relative"
                            }}
                            className={[isMobile && styles.navMobile, isMenu && styles.navDisplay]}
                            >

                                <Link className={styles.linkStyle} >Find Doctors</Link>
                                <Link className={styles.linkStyle} >Hospitals</Link>
                                <Link className={styles.linkStyle} >Medicines</Link>
                                <Link className={styles.linkStyle} >Surgeries</Link>
                                <Link className={styles.linkStyle} >Software for Provider</Link>
                                <Link className={styles.linkStyle} >Facilities</Link>
                                <Button color="primary" variant="contained" >My Bookings</Button>

                                {
                                    isMobile && (
                                        <CloseIcon 
                                        sx={{
                                            color: "#2AA7FF",
                                            position: "absolute",
                                            top: 0,
                                            right: 0,
                                            padding: "10px"
                                        }}
                                        onClick={() => {
                                            setIsMenu(false)
                                        }}
                                        />
                                    )
                                }

                            </Stack>

                            {
                                isMobile && (
                                    <MenuIcon 
                                    sx={{
                                        color: "#2AA7FF",
                                    }}
                                    onClick={() => {
                                        setIsMenu(true)
                                    }}
                                    />
                                )
                            }

                        </Stack>
                        
                    </div>
                )
            }

            {
                home || (
                    <div>
                        Navbar-Alt
                    </div>
                )
            }
        </div>
    )
}