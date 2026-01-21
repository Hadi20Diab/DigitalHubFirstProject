"use client";
import React from "react";
import "./OurMembers.scss"
import Image from "next/image";

const OurMembers = () => {

    return (
        <section className="OurMembersContainer">
            <div className="OurMembers_contant">
                <h1>What <span className="highlight-text">Our Member’s</span><br />Saying About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Sem velit viverra amet faucibus.</p>
                <div className="OurMembers_reviews">
                    <div className="OurMembers_images">
                        <Image src="/assets/images/member1.png" alt="member1" width={50} height={50} />
                        <Image src="/assets/images/member2.png" alt="member2" width={50} height={50} />
                        <Image src="/assets/images/member3.png" alt="member3" width={50} height={50} />
                        <Image src="/assets/images/member4.png" alt="member4" width={50} height={50} />
                        <Image src="/assets/images/member5.png" alt="member5" width={50} height={50} />
                    </div>
                    <div className="ourMembers_reviews_count">100+ Reviews</div>
                </div>
            </div>
            <div className="OurMembers_card">
                <div>
                    <div>
                        <Image src="/assets/images/member3.png" alt="member-profile" width={60} height={60} />
                        <div>
                            <h4>Jane Cooper</h4>
                            <p>12/4/17</p>
                        </div>
                    </div>
                    <div className="stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.</p>
            </div>
        </section>
    );
};

export default OurMembers;
