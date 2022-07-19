var express = require('express');
var router = express.Router();

var memberService = require("../../Service/MemberService")
var joinDTO = require("../dto/JoinDTO")
var UpdatePasswordDTO = require("../dto/UpdatePasswordDTO")

var reviewService = require("../../Service/ReviewService")
var ReviewDTO = require("../dto/ReviewDTO")

var inquiryService = require("../../Service/InquiryService")
var InquiryDTO = require("../dto/InquiryDTO")

var journalService = require("../../Service/JournalService")
var JournalDTO = require("../dto/JournalDTO")

var noticeService = require("../../Service/NoticeService")
var NoticeDTO = require("../dto/NoticeDTO")

var commentService = require("../../Service/CommentService")
var CommentDTO = require("../dto/CommentDTO")

var progresslistService = require("../../Service/ProgressListService")
var ProgressListDTO = require("../dto/ProgressListDTO")



// memberService

//logout withdraw
router.post('/member/join', async function (req, res, next) {
    memberService.JoinPost(joinDTO(req), res, next)
});
router.post('/member/login', async function(req, res, next) {
    memberService.Login(req, res, next)
})
router.post('/member/updatePassword', async function(req, res, next){
    memberService.UpdatePasswordPost(UpdatePasswordDTO(req), res, next)
})
// router.get('/member/logout', async function(req, res, next){
//     memberService.LogOut(req, res, next)
// })
// router.post('/member/witdrawal', async function(req, res, next){
//     memberService.Withdrawal(req, res, next)
// })


// reviewService
router.post('/review/record', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Post.recordPost(ReviewDTO.post(req), res, next)
});


router.get('/review/record', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Get.recordGet(req, res, next)
});
router.get('/review/record/list', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Get.listGet(req, res, next)
});
router.get('/review/record/each', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Get.eachGet(ReviewDTO.get(req), res, next)
});

router.get('/review/repairShipList', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Get.repairShipList(req, res, next)
});

router.post('/review/record/update', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Update.recordUpdate(ReviewDTO.post(req), res, next)
});
router.post('/review/record/count/update', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Update.countUpdate(ReviewDTO.post(req), res, next)
});

router.post('/review/record/delete', memberService.isLoggedIn, async function (req, res, next) {
    reviewService.Delete.recordDelete(ReviewDTO.post(req), res, next)
});


// inquiryService
router.post('/inquiry/record', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Post.recordPost(InquiryDTO.post(req), res, next)
});


router.get('/inquiry/record', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Get.recordGet(req, res, next)
});
router.get('/inquiry/record/list', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Get.listGet(req, res, next)
});
router.get('/inquiry/record/each', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Get.eachGet(InquiryDTO.get(req), res, next)
});


router.post('/inquiry/record/update', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Update.recordUpdate(InquiryDTO.post(req), res, next)
});
router.post('/inquiry/record/count/update', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Update.countUpdate(InquiryDTO.post(req), res, next)
});

router.post('/inquiry/record/delete', memberService.isLoggedIn, async function (req, res, next) {
    inquiryService.Delete.recordDelete(InquiryDTO.post(req), res, next)
});

// journalService
router.post('/journal/record', memberService.isLoggedIn, async function (req, res, next) {
    journalService.Post.recordPost(JournalDTO.post(req), res, next)
});


router.get('/journal/record', memberService.isLoggedIn, async function (req, res, next) {
    journalService.Get.recordGet(JournalDTO.get(req), res, next)
});
router.get('/journal/record/list', memberService.isLoggedIn, async function (req, res, next) {
    journalService.Get.listGet(JournalDTO.get(req), res, next)
});
router.get('/journal/record/each', memberService.isLoggedIn, async function (req, res, next) {
    journalService.Get.eachGet(JournalDTO.get(req), res, next)
});


router.post('/journal/record/update', memberService.isLoggedIn, async function (req, res, next) {
    journalService.Update.recordUpdate(JournalDTO.post(req), res, next)
});

router.post('/journal/record/delete', memberService.isLoggedIn, async function (req, res, next) {
    journalService.Delete.recordDelete(JournalDTO.post(req), res, next)
});

// test 필요
router.post('/notice/record', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Post.recordPost(NoticeDTO.post(req), res, next)
});


router.get('/notice/record', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Get.recordGet(req, res, next)
});
router.get('/notice/record/list', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Get.listGet(req, res, next)
});
router.get('/notice/record/each', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Get.eachGet(NoticeDTO.get(req), res, next)
});


router.post('/notice/record/update', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Update.recordUpdate(NoticeDTO.post(req), res, next)
});
router.post('/notice/record/count/update', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Update.countUpdate(NoticeDTO.post(req), res, next)
});

router.post('/notice/record/delete', memberService.isLoggedIn, async function (req, res, next) {
    noticeService.Delete.recordDelete(NoticeDTO.post(req), res, next)
});

// commnetService
router.post('/comment', async function (req, res, next) {
    commentService.Post.commentPost(CommentDTO.post(req),res,next)
});

router.get('/comment', async function (req, res, next) {
    commentService.Get.commentGet(CommentDTO.get(req),res,next)
});


// ProgrssListService
router.get('/progresslist', async function (req, res, next) {
    progresslistService.Get.plGet(ProgressListDTO.get(req), res, next)
});

router.post('/progresslist', async function (req, res, next) {
    progresslistService.Post.pl(ProgressListDTO.post(req), res, next)
});



module.exports = router;