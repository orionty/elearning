import React from "react";
import Footer from "../Footer";
import NavBar from "../Navbar";

function Privacy() {
  return (
    <div>
      <NavBar />
      <div className="container shadow-lg pt-5 pb-5 ps-3 pe-3 mb-5 bg-body rounded">
        <h3>Privacy Policy </h3>
        <p className="fw-bold mb-2">Last updated July 06, 2022</p>
        <p>
          This privacy notice for E-learning (<b>'Company'</b>, <b>'we'</b>,{" "}
          <b>'us'</b>, or <b>'our'</b>,), describes how and why we might
          collect, store, use, and/or share (<b>'process'</b>) your information
          when you use our services (<b>'Services'</b>), such as when you:
          <ul>
            <li>
              Visit our website at{" "}
              <a href="www.elearning.com" className="text-decoration-none">
                www.elearning.com
              </a>
              , or any website of ours that links to this privacy notice
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
        </p>

        <p className="mb-3">
          <b>Questions or concerns?</b> Reading this privacy notice will help
          you understand your privacy rights and choices. If you do not agree
          with our policies and practices, please do not use our Services. If
          you still have any questions or concerns, please contact us at
          oriontyweb@gmail.com.
        </p>
        <h6 className="fw-bold">SUMMARY OF KEY POINTS</h6>
        <p className="mb-3">
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>

        <p className="mb-3">
          <b>What personal information do we process?</b> When you visit, use,
          or navigate our Services, we may process personal information
          depending on how you interact with E-learning and the Services, the
          choices you make, and the products and features you use.
        </p>

        <p className="mb-3">
          <b>Do we process any sensitive personal information?</b> We do not
          process sensitive personal information.
        </p>
        <p className="mb-3">
          <b> Do we receive any information from third parties?</b> We may
          receive information from public databases, marketing partners, social
          media platforms, and other outside sources.
        </p>

        <p>
          <b> How do we process your information?</b> We process your
          information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply
          with law. We may also process your information for other purposes with
          your consent. We process your information only when we have a valid
          legal reason to do so
        </p>

        <p>
          <b>
            {" "}
            In what situations and with which parties do we share personal
            information?
          </b>{" "}
          We may share information in specific situations and with specific
          third parties.
        </p>
        <p>
          <b> How do we keep your information safe?</b> We have organisational
          and technical processes and procedures in place to protect your
          personal information. However, no electronic transmission over the
          internet or information storage technology can be guaranteed to be
          100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorised third parties will not be able
          to defeat our security and improperly collect, access, steal, or
          modify your information
        </p>
        <p>
          <b>What are your rights? </b> Depending on where you are located
          geographically, the applicable privacy law may mean you have certain
          rights regarding your personal information.
        </p>

        <h2>TABLE OF CONTENTS</h2>
        <div className="mb-5">
          <ol>
            <li>WHAT INFORMATION DO WE COLLECT ?</li>
            <li>HOW DO WE PROGRESS YOUR INFORMATION ?</li>
            <li>
              WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION
            </li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES ?</li>
            <li>HOW DO WE HANDLE YOUR SOCIAL</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION ?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE ?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS ?</li>
            <li>CONTROLS FOR DO NOT TRACK FEATURES</li>
            <li>DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS ?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE ?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE ?</li>
            <li>
              HOW CAN YOU REVIEW UPDATE OR DELETE THE DATA WE COLLECT FROM YOU ?
            </li>
          </ol>
        </div>

        <div>
          <ol>
            <li className="fw-bold">WHAT INFORMATION DO WE COLLECT ?</li>
          </ol>
          <h6>
            <b>Personal information you disclose to us</b>
          </h6>
          <p>
            <i>
              <b>In Short:</b> We collect personal information that you provide
              to us.
            </i>
          </p>
          <p>
            We collect personal information that you voluntarily provide to us
            when you register on the Services, express an interest in obtaining
            information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you
            contact us.
          </p>

          <p>
            <b>Personal Information Provided by You.</b> The personal
            information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the
            products and features you use. The personal information we collect
            may include the following:
          </p>
          <ol>
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>passwords</li>
            <li>usernames</li>
            <li>debit/credit card numbers</li>
          </ol>
          <p>
            <b>Sensitive Information. </b> We do not process sensitive
            information.
          </p>
          <p>
            <b>Social Media Login Data.</b> We may provide you with the option
            to register with us using your existing social media account
            details, like your Facebook, Twitter, or other social media account.
            If you choose to register in this way, we will collect the
            information described in the section called 'HOW DO WE HANDLE YOUR
            SOCIAL LOGINS?' below.
          </p>
          <p>
            All personal information that you provide to us must be true,
            complete, and accurate, and you must notify us of any changes to
            such personal information.
          </p>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Privacy;
