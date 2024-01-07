"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrderByIdController = exports.updateOrderWithCustomerIdController = exports.updateOrderByIdController = exports.createOrderController = exports.getOrderByIdController = exports.getAllOrdersController = void 0;
const order_query_1 = require("../models/order/order.query");
const getAllOrdersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield (0, order_query_1.getAllOrders)();
        res.json(orders);
    }
    catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
});
exports.getAllOrdersController = getAllOrdersController;
const getOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const order = yield (0, order_query_1.getOrderById)(id);
        res.json(order);
    }
    catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
});
exports.getOrderByIdController = getOrderByIdController;
const createOrderController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderObject = Object.assign({}, req.body);
        const order = yield (0, order_query_1.createOrder)(orderObject);
        res.status(201);
        res.json(order);
    }
    catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
});
exports.createOrderController = createOrderController;
const updateOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderId = req.params.id;
        const orderObject = Object.assign({}, req.body);
        const order = yield (0, order_query_1.updateOrderById)(orderId, orderObject);
        res.json(order);
    }
    catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
});
exports.updateOrderByIdController = updateOrderByIdController;
const updateOrderWithCustomerIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId, customerId } = req.params;
        const order = yield (0, order_query_1.updateOrderById)(orderId, { customerId: parseInt(customerId) });
        res.json(order);
    }
    catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
});
exports.updateOrderWithCustomerIdController = updateOrderWithCustomerIdController;
const deleteOrderByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const response = yield (0, order_query_1.deleteOrderById)(id);
        res.json(response);
    }
    catch (error) {
        res.status(500);
        res.json({ error: error.message });
    }
});
exports.deleteOrderByIdController = deleteOrderByIdController;
